import React from "react";
import { TypographyH1, TypographyP } from "../typography";

function IntroSection() {
  return (
    <div className="bg-accent pb-20 max-md:pt-20">
      <div className="container mx-auto pt-5 md:pt-[20vh]">
        <TypographyH1 className="text-secondary text-center">
          Our Programs
        </TypographyH1>
        <TypographyP className="text-[#6B6969] max-w-screen-xl text-center mx-auto">
          At MCF, we are dedicated to improving lives through timely healthcare
          support, empowering health practitioners, inspiring young girls
          through education, and advancing maternal health research. Join us in
          creating lasting change for our communities.
        </TypographyP>
      </div>
    </div>
  );
}

export default IntroSection;
