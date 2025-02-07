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
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="rounded-lg"
                >
                  <Link href="/get-involved">
                    Donate Now <Heart fill="white" size={20} />
                  </Link>
                </Button>
                <Image
                  src="/curl-arrow.svg"
                  alt="Curl Arrow"
                  width={80}
                  height={80}
                  className="max-lg:hidden"
                />
                <Button
                  variant="link"
                  className="text-secondary border-2 border-secondary rounded-lg"
                  size="lg"
                  onClick={scrollToNextSection}
                >
                  Learn More <ArrowRight fill="currentColor" size={20} />
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="flex justify-evenly w-full mt-20">
                <Image
                  src="/oau_logo.png"
                  alt="OAU Logo"
                  width={40}
                  height={40}
                />
                <Image
                  src="/oauthc_logo.png"
                  alt="OAUTHC Logo"
                  width={40}
                  height={40}
                />
                <Image
                  src="/liverpool_logo.png"
                  alt="liverpool Logo"
                  width={130}
                  height={50}
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
