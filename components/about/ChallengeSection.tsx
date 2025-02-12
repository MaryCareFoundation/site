import React from "react";
import { TypographyH3 } from "../typography";
import OverlappingImage from "../OverlappingImage";
import FramedImage from "../FramedImage";
import ContentSection from "./ContentSection";

function ChallengeSection() {
  return (
    <div className="mt-10">
      <TypographyH3 className="text-secondary mx-auto text-center">
        The Challenge
      </TypographyH3>
      <ContentSection
        number={1}
        title="Maternal Mortality"
        description="Maternal mortality remains a critical issue in Nigeria, with 512 maternal deaths per 100,000 births and a lifetime risk of 1 in 22 for Nigerian women. Economic barriers and insufficient access to healthcare are significant contributors to this crisis. MCF’s work directly addresses these challenges by providing necessary resources and advocacy to reduce preventable maternal deaths."
        imageUrl="/mother_baby.jpeg"
      />
      <ContentSection
        number={2}
        title="Young Girls’ Development"
        description="Young girls in Nigeria face systemic discrimination in access to education, food, and nutrition. Many are subjected to early marriage, child labor, and inadequate opportunities for skill acquisition. MCF’s initiatives aim to empower these girls through education and vocational training, promoting gender equality and breaking the cycle of marginalization."
        imageFirst
        imageUrl="/young-girls.png"
      />
    </div>
  );
}

export default ChallengeSection;
