import { Clock, Users, GraduationCap, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import OverlappingImage from "../OverlappingImage";
import { TypographyH3, TypographyP, TypographySpan } from "../typography";
import { programToBlogCategory } from "@/lib/utils/program-categories";
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  goal: string;
  description: string;
  image: string;
  icon: "time" | "health" | "education" | "stethoscope";
}

export default function ProgramCard({
  title,
  goal,
  description,
  image,
  icon,
}: ProgramCardProps) {
  const categorySlug =
    programToBlogCategory[title as keyof typeof programToBlogCategory];
  const Icon = {
    time: Clock,
    health: Users,
    education: GraduationCap,
    stethoscope: Stethoscope,
  }[icon];

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
      <div className="w-full lg:w-2/5">
        <OverlappingImage src={image} alt={title} />
      </div>
      <div className="w-full lg:w-3/5">
        <div className="bg-[#003B3B] rounded-3xl p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Icon className="w-6 h-6 text-white" />
            <TypographyH3 className="text-xl lg:text-2xl text-center mx-auto font-bold text-white">
              {title}
            </TypographyH3>
          </div>

          <div className="space-y-4 text-white/90">
            <TypographyP className="text-center">
              <TypographySpan className="font-semibold">Goal:</TypographySpan>{" "}
              {goal}
            </TypographyP>
            <TypographyP className="leading-relaxed text-center">
              {description}
            </TypographyP>
          </div>
          <Link href={`/blog?category=${categorySlug}`}>
            <Button
              variant="link"
              className="text-white mt-6 md:text-xl text-center mx-auto flex items-center justify-center underline p-0 hover:text-white/80"
              size={"lg"}
            >
              Read more →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
