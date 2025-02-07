"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BlogFilter } from "./blog-filter";
import { BlogCard } from "./blog-card";
import { NoPosts } from "./no-posts";
import type { BlogPost } from "@/lib/types";

interface BlogPageProps {
  initialPosts: BlogPost[];
}

export default function BlogPage({ initialPosts }: BlogPageProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [filter, setFilter] = useState(initialCategory);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setFilter(category);
    }
  }, [searchParams]);

  const filteredPosts = initialPosts.filter((post) =>
    filter === "all" ? true : post.category === filter
  );

  return (
    <div className="container py-12">
      <div className="mb-12">
        <BlogFilter value={filter} onValueChange={setFilter} />
      </div>
      {filteredPosts.length > 0 ? (
        <div className="space-y-12">
          {filteredPosts.map((post) => (
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
    </div>
  );
}
