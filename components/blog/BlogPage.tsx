"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BlogFilter } from "./blog-filter";
import { BlogCard } from "./blog-card";
import { NoPosts } from "./no-posts";
import type { BlogPost } from "@/lib/types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

interface BlogPageProps {
  initialPosts: BlogPost[];
}

export default function BlogPage({ initialPosts }: BlogPageProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [filter, setFilter] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; // Number of posts to display per page

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setFilter(category);
    }
  }, [searchParams]);

  const filteredPosts = initialPosts.filter((post) =>
    filter === "all" ? true : post.category === filter
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container py-12">
      <div className="mb-12">
        <BlogFilter value={filter} onValueChange={setFilter} />
      </div>
      {currentPosts.length > 0 ? (
        <div className="space-y-12">
          {currentPosts.map((post) => (
            <BlogCard
              key={post._id}
              title={post.title}
              excerpt={post.excerpt}
              image={post.mainImageUrl}
              slug={post.slug}
              category={post.category}
            />
          ))}
        </div>
      ) : (
        <NoPosts />
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  aria-disabled={currentPage === 1}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index + 1}>
                  <PaginationLink
                    onClick={() => handlePageChange(index + 1)}
                    isActive={currentPage === index + 1}
                    className="cursor-pointer"
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  aria-disabled={currentPage === totalPages}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
