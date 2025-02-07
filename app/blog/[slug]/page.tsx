import { client } from "@/lib/sanity";
import { blogPostBySlugQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TypographyH1, TypographyP } from "@/components/typography";
import { format } from "date-fns";
import { teachers_font } from "@/lib/fonts";

export const revalidate = 60;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let post = null;
  try {
    const { slug } = await params;
    console.log("Fetching post with slug:", slug); // Debug log

    post = await client.fetch(blogPostBySlugQuery, { slug: slug });

    console.log("Fetched post:", post); // Debug log

    if (!post) {
      console.log("Post not found"); // Debug log
      notFound();
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    notFound();
  }

  return (
    <article className="pb-12">
      <div className=" pt-20 mb-8 bg-accent">
        <div className="container space-y-4 max-w-4xl ">
          {post && post?.mainImageUrl && (
            <div className="relative aspect-video mb-8   overflow-hidden rounded-lg">
              <Image
                src={post?.mainImageUrl}
                alt={post?.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <TypographyH1 className="text-4xl font-bold text-center mx-auto ">
            {post?.title}
          </TypographyH1>
          {post.publishedAt && (
            <TypographyP className="text-muted-foreground ">
              {format(new Date(post?.publishedAt), "MMMM dd, yyyy")}
            </TypographyP>
          )}
        </div>
      </div>

      <div className="container max-w-4xl ">
        <div
          className={`portable-styles prose prose-lg max-w-none ${teachers_font}`}
        >
          <PortableText value={post.content} />
        </div>
      </div>
    </article>
  );
}
