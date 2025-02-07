import { Stethoscope, GraduationCap, Calendar, Rocket } from "lucide-react";
import {
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographySpan,
} from "../typography";
import Image from "next/image";

interface TimelineItemProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function TimelineItem({ number, title, description, icon }: TimelineItemProps) {
  return (
    <div className="flex gap-6 items-start">
      <div className="relative">
        <div className="flex items-center justify-center w-12 h-12 bg-accent border-[#3C6E71] border rounded-lg">
          <TypographySpan className="text-[#003B3B] font-normal">
            {number}
          </TypographySpan>
        </div>
        {number < 4 && (
          <div className="absolute top-12 left-1/2  " >
            <Image
            src="/icons/list-arrow.svg"
            alt=""
            width={6}
            height={6}
            className="mt-1 flex-shrink-0"
          />
          </div>
        )}
      </div>
      <div className="flex-1 pt-2">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#003B3B]">{icon}</span>
          <TypographyH3 className="text-xl font-bold text-[#003B3B]">
            {title}
          </TypographyH3>
        </div>
        <TypographyP className="text-gray-600 leading-relaxed">
          {description}
        </TypographyP>
      </div>
    </div>
  );
}

export default function TimelineSection() {
  const milestones = [
    {
      number: 1,
      title: "Medical Support",
      description:
        "Periodic donations of medical consumables to Children's Emergency and Labour wards at Wesley Guild Hospital and IHU.",
      icon: <Stethoscope className="w-5 h-5" />,
    },
    {
      number: 2,
      title: "Educational Programs",
      description:
        'The "Train a Child Project", supporting students at Idita Community High School, Mokuro, Ile-Ife.',
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      number: 3,
      title: "Seminars and Training",
      description:
        "Organized webinars and training programs in collaboration with healthcare institutions to enhance maternal and child healthcare delivery.",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      number: 4,
      title: "Empowerment Initiatives",
      description:
        "Scholarships and educational assistance for young girls, along with skills acquisition programs to promote self-reliance.",
      icon: <Rocket className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <TypographyH2 className="text-3xl font-bold text-center text-[#003B3B] mb-12">
        Key Milestones & Impacts
      </TypographyH2>
      <div className="space-y-8">
        {milestones.map((milestone) => (
          <TimelineItem key={milestone.number} {...milestone} />
        ))}
      </div>
    </section>
  );
}
