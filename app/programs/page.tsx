import IntroSection from "@/components/programs/IntroSection";
import ProgramList from "@/components/programs/ProgramList";
import React from "react";
import { FadeIn } from "@/components/animations/fade-in";

function ProgramsPage() {
  return (
    <div>
      <FadeIn>
      <IntroSection />
      <ProgramList />
      </FadeIn>
    </div>
  );
}

export default ProgramsPage;
