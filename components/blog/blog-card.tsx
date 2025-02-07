import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyP } from "../typography";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  slug: { current: string };
  category: string;
}

export function BlogCard({ title, excerpt, image, slug, category }: BlogCardProps) {
  return (
    <div className="grid md:grid-cols-[300px,1fr] gap-6 items-start">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-4">
        <TypographyH2 className="text-2xl font-bold text-[#2F6F6F] leading-tight">
          {title}
        </TypographyH2>
        <TypographyP className="text-gray-600 leading-relaxed">
          {excerpt}
        </TypographyP>
        <Button asChild variant="default" className="rounded-lg font-medium">
          <Link href={`/blog/${slug.current}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
