import { ReactNode } from "react";
import FramedImage from "../FramedImage";
import { TypographyH2, TypographyP } from "../typography";

interface ContentSectionProps {
  number: number;
  title: string;
  description: string;
  imageFirst?: boolean;
  imageUrl?: string;
}

export default function ContentSection({
  number,
  title,
  description,
  imageFirst = false,
  imageUrl,
}: ContentSectionProps) {
  const Content = () => (
    <div className="relative w-full lg:w-1/2 p-8 lg:p-12">
      <div className="bg-[#003B3B] rounded-[32px] p-8 lg:p-12">
        <div className="space-y-4">
          <div className="text-green-400 text-4xl font-bold">{number}.</div>
          <TypographyH2 className="text-white text-2xl font-bold">
            {title}
          </TypographyH2>
          <TypographyP className="text-white/90 leading-relaxed">
            {description}
          </TypographyP>
        </div>
      </div>
    </div>
  );

  const Image = () => (
    <div className="w-full lg:w-1/2 flex justify-center">
      <FramedImage
        src={imageUrl || "/placeholder.svg"}
        alt="A parent holding a baby outdoors in a natural setting"
      />
    </div>
  );

  return (
    <section className="container mx-auto py-12">
      <div
        className={`flex flex-col ${
          imageFirst ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-8 lg:gap-12`}
      >
        <Content />
        <Image />
      </div>
    </section>
  );
}
