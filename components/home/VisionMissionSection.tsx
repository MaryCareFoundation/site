"use client";

import React from "react";
import { TypographyH4, TypographyP, TypographySpan } from "../typography";
import Image from "next/image";
import FramedImage from "../FramedImage";
import { FadeIn } from "../animations/fade-in";

function VisionMissionSection() {
  return (
    <div
      id="vision-mission"
      className="container mx-auto px-4 my-[15vh] md:my-[20vh]"
    >
      <div className="grid lg:grid-cols-3 gap-y-12 lg:gap-5">
        <FadeIn delay={0.2} className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={"/icons/vision.svg"}
              alt="Vision Icon"
              width={20}
              height={20}
            />
            <TypographySpan className="font-bold text-xl md:text-2xl text-secondary">
              Our Vision
            </TypographySpan>
          </div>
          <TypographyP className="text-left font-medium text-lg md:text-2xl">
            create maternal and perinatal support for mothers; and
            empowerment for young girls to thrive.
          </TypographyP>
        </FadeIn>

        <FadeIn
          delay={0.4}
          className="flex items-center justify-center"
        >
          <div className="w-full overflow-x-hidden flex justify-center">
            <FramedImage src="/mother_baby.jpeg" alt="mother_baby" />
          </div>
        </FadeIn>

        <FadeIn delay={0.6} className="flex flex-col justify-center">
          <div className="flex items-center md:justify-end gap-3 mb-4">
            <Image
              src={"/icons/admission.svg"}
              alt="Mission Icon"
              width={22}
              height={22}
            />
            <TypographyH4 className="font-bold text-xl md:text-2xl text-secondary">
              Our Mission
            </TypographyH4>
          </div>
          <TypographyP className="text-left md:text-right font-medium text-lg md:text-2xl">
            contribute to the challenges of perinatal health of women
            and marginalization of girls in our community.
          </TypographyP>
        </FadeIn>
      </div>
    </div>
  );
}

export default VisionMissionSection;
