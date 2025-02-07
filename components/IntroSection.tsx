import React from "react";
import { TypographyH1, TypographyP } from "./typography";

interface IntroSectionProps {
  title: string;
  description: string;
  bgColor?: string;
  className?: string;
}

function IntroSection({
  title,
  description,
  bgColor = "bg-accent",
  className = "",
}: IntroSectionProps) {
  return (
    <div className={`${bgColor} pb-20 ${className}`}>
      <div className="container mx-auto pt-28 md:pt-[20vh]">
        <TypographyH1 className="text-secondary text-center">
          {title}
        </TypographyH1>
        <TypographyP className="text-[#6B6969] max-w-screen-xl text-center mx-auto">
          {description}
        </TypographyP>
      </div>
    </div>
  );
}

export default IntroSection;
