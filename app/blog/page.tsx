import { client } from "@/lib/sanity";
import { blogPostsQuery } from "@/lib/queries";
import BlogPage from "@/components/blog/BlogPage";
import { Suspense } from "react";
import IntroSection from "@/components/IntroSection";
import type { BlogPost } from "@/lib/types";
import { Loader2 } from "lucide-react";

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function BlogPageWrapper() {
  let posts: BlogPost[] = [];
  try {
    posts = await client.fetch<BlogPost[]>(blogPostsQuery);
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  return (
    <>
      <IntroSection
        title="Blog"
        description="Welcome to our blog section! Here, we share stories of impact, updates on our programs, and meaningful insights into the causes we champion. Stay informed about our latest initiatives, successes, and ways you can help make a difference. Together, we can create a brighter future for communities in need. Dive in and get inspired!"
      />
      <Suspense
        fallback={
          <div className="min-h-[50vh] w-full flex items-center justify-center">
            <Loader2 size={40} className="animate-spin fill-primary" />
          </div>
        }
      >
        <BlogPage initialPosts={posts} />
      </Suspense>
    </>
  );
}
