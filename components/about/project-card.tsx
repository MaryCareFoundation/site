import Image from "next/image";
import { TypographyH3 } from "../typography";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  image: string;
  children: React.ReactNode;
  link?: string;
}

export default function ProjectCard({
  title,
  image,
  children,
  link,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      <div className="w-full md:w-2/5">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="w-full h-[300px] object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-3/5">
        <div className="bg-[#F5FFFD] rounded-2xl p-6 md:p-8 h-full">
          <TypographyH3 className="text-xl md:text-2xl font-semibold text-secondary mb-4">
            {link ? (
              <Link href={link} className="hover:underline">
                {title}
              </Link>
            ) : (
              title
            )}
          </TypographyH3>
          <div className="space-y-2 text-[#003B3B]">{children}</div>
        </div>
      </div>
    </div>
  );
}