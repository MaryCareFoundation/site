"use client";

import ChallengeSection from "@/components/about/ChallengeSection";
import CollaborationsSection from "@/components/about/CollaborationSection";
import CurrentProjectsSection from "@/components/about/current-projects-section";
import FundingSection from "@/components/about/FundingSection";
import Intro from "@/components/about/Intro";
import TimelineSection from "@/components/about/TimelineSection";
import { FadeIn } from "@/components/animations/fade-in";

function Page() {
  return (
    <>
      <FadeIn>
        <Intro />
      </FadeIn>
      <FadeIn delay={0.2}>
        <ChallengeSection />
      </FadeIn>
      <FadeIn delay={0.4}>
        <TimelineSection />
      </FadeIn>
      <FadeIn delay={0.6}>
        <CollaborationsSection />
      </FadeIn>
      <FadeIn delay={0.8}>
        <CurrentProjectsSection />
      </FadeIn>
      <FadeIn delay={1.0}>
        <FundingSection />
      </FadeIn>
    </>
  );
}

export default Page;
