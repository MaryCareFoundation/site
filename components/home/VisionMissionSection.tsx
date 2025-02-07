"use client";

import React from "react";
import { TypographyH4, TypographySpan } from "../typography";
import Image from "next/image";
import FramedImage from "../FramedImage";
import { FadeIn } from "../animations/fade-in";

function VisionMissionSection() {
  return (
    <div
      id="vision-mission"
      className="grid md:grid-cols-3 max-md:place-items-center container mx-auto gap-5 my-[20vh]"
    >
      <FadeIn delay={0.2}>
        <div className="min-h-[30vh]">
          <div>
            <div className="flex items-center gap-3 overflow-hidden">
              <Image
                src={"/icons/vision.svg"}
                alt="Vision Icon"
                width={20}
                height={20}
              />
              <TypographySpan className="font-bold text-2xl text-secondary">
                Our Vision
              </TypographySpan>
            </div>
            <br />
            <TypographySpan className="font-medium text-2xl">
              is to create maternal and perinatal support for mothers; and
              empowerment for young girls to thrive.{" "}
            </TypographySpan>
          </div>
        </div>
      </FadeIn>

      <FadeIn
        delay={0.4}
        className="flex items-center justify-center relative overflow-hidden"
      >
        <FramedImage src="/mother_baby.jpeg" alt="mother_baby" />
      </FadeIn>

      <FadeIn delay={0.6}>
        <div className="min-h-[30vh] flex flex-col justify-end">
          <div className="mt-auto">
            <div className="flex items-center gap-3">
              <Image
                src={"/icons/admission.svg"}
                alt="Mission Icon"
                width={20}
                height={20}
              />
              <TypographySpan className="font-bold text-2xl text-secondary">
                Our Mission
              </TypographySpan>
            </div>
            <br />
            <TypographySpan className="max-w-sm font-medium text-2xl">
              is to contribute to the challenges of perinatal health of women
              and marginalization of girls in our community.
            </TypographySpan>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default VisionMissionSection;
