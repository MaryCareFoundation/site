"use client";

import React from "react";
import { TypographyH2, TypographyP, TypographySpan } from "../typography";
import {
  ArrowRightIcon,
  Clock8,
  GraduationCap,
  Stethoscope,
  Users,
} from "lucide-react";
import Link from "next/link";
import { FadeIn } from "../animations/fade-in";

function ProgramsSection() {
  const programs = [
    {
      icon: <Clock8 size={28} className="text-white" />,
      title: "SAVE TIME, SAVE LIFE",
      description:
        "Provide support to care for pregnant women and babies without delay.",
    },
    {
      icon: <Users size={28} className="text-white" />,
      title: "HEALTH PRACTITIONERS EMPOWERMENT PROGRAM",
      description:
        "Provide training for healthcare workers through seminars and  workshops.",
    },
    {
      icon: <GraduationCap size={28} className="text-white" />,
      title: "TRAIN A GIRL CHILD PROJECT",
      description:
        "Provide training for healthcare workers through seminars and  workshops.",
    },
    {
      icon: <Stethoscope size={28} className="text-white" />,
      title: "MATERNAL HEALTH RESEARCH",
      description:
        "Provide training for healthcare workers through seminars and  workshops.",
    },
  ];
  return (
    <section className="py-16 bg-[#002B2E]">
      <div className="container mx-auto ">
        <FadeIn>
          <div className="container mx-auto text-center mb-12">
            <TypographyH2 className="mx-auto text-white text-center">
              Our Programs
            </TypographyH2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {programs.map((program, index) => (
            <FadeIn
              key={program.title}
              delay={0.2 * index}
              className={` ${
                index !== programs.length - 1 ? "border-r border-gray-200" : ""
              } py-8`}
            >
              <ProgramsCard
                title={program.title}
                description={program.description}
                icon={program.icon}
              />
            </FadeIn>
          ))}
        </div>

        <div className="flex max-md:justify-center justify-end mt-16">
          <Link href="/programs">
            <TypographySpan className="text-white text-lg underline font-semibold group flex items-center">
              Learn More About Our Programs{" "}
              <ArrowRightIcon
                size={20}
                className="group-hover:scale-150 group-hover:translate-x-5 duration-300 transition-all"
              />
            </TypographySpan>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;

function ProgramsCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex items-center justify-center">{icon}</div>
      <TypographySpan className="text-white font-medium mt-5 text-lg max-w-[15rem] text-center">
        {title}
      </TypographySpan>
      <TypographyP className="text-center text-white max-w-[18rem]">
        {description}
      </TypographyP>
    </div>
  );
}
