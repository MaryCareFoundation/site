"use client";
import React from "react";
import { TypographyH1, TypographyP } from "../typography";
import { HeroSlider } from "../hero-slider";
import { Button } from "../ui/button";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../animations/fade-in";

export default function HeroSection() {
  const scrollToNextSection = () => {
    const visionSection = document.querySelector("#vision-mission");
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[90vh] relative">
      <div className="bg-accent h-screen w-[50vw] absolute top-0 left-0 -z-1"></div>
      <div className="container mx-auto">
        <div className="flex max-md:flex-col justify-between mx-auto">
          <div className="max-w-xl pt-5 md:pt-20 px-10 z-10 w-full h-full">
            <FadeIn delay={0.2}>
              <TypographyH1 className="!leading-normal mt-20 text-[#263734]">
                <span>Building</span> a World Where{" "}
                <span>Every Life Thrives.</span>
              </TypographyH1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <TypographyP className="mt-6 max-w-3xl text-[12px] text-gray-500">
                Mary Care Foundation (MCF) is an NGO that was established in
                2019 to offer support to mothers in emergency cases at
                childbirth and postpartum period. MCF (with registration number:
                184127), also contributes to young girls' empowerment.
              </TypographyP>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex max-md:flex-col max-md:items-center gap-10 mt-10 md:mt-20">
              <Link href="/get-involved">
            <Button variant="default" className="rounded-lg" size="lg">
              Get Involved
            </Button>
          </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="flex lg:gap-10 gap-5 max-md:flex-wrap w-full mt-5">
                <Image
                  src="/oau_logo.webp"
                  alt="OAU Logo"
                  width={80}
                  height={80}
                  quality={100}
                  className="object-contain max-md:w-[60px] max-md:h-[60px]"
                />
                <Image
                  src="/oauthc_logo.jpg"
                  alt="OAUTHC Logo"
                  width={80}
                  height={80}
                  quality={100}
                            style={{ objectFit: "contain" }}
                className="rounded-full max-md:w-[60px] max-md:w-[60px]"
                />
                <Image
                  src="/liverpool_logo.svg"
                  alt="liverpool Logo"
                  className="object-contain max-md:w-[60px] max-md:h-[60px]"
                  width={200}
                  height={130}
                  quality={100}
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn
            delay={0.2}
            direction="left"
            className="flex items-end justify-end max-md:hidden right-0 pt-20 max-md:w-full pl-12 bg-white min-w-[50%] h-[90vh]"
          >
            <HeroSlider />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
