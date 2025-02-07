import ChallengeSection from "@/components/about/ChallengeSection";
import CollaborationsSection from "@/components/about/CollaborationSection";
import CurrentProjectsSection from "@/components/about/current-projects-section";
import FundingSection from "@/components/about/FundingSection";
import Intro from "@/components/about/Intro";
import TimelineSection from "@/components/about/TimelineSection";
import React from "react";

function Page() {
  return (
    <>
      <Intro />
      <ChallengeSection />
      <TimelineSection />
      <CollaborationsSection />
      <CurrentProjectsSection />
      <FundingSection />
    </>
  );
}

export default Page;
