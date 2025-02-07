"use client";
import GetInvolvedPage from "@/components/get-involved/get-involved-page";
import IntroSection from "@/components/IntroSection";
import React from "react";

function Page() {
  return (
    <div>
      <IntroSection
        title="Get Involved"
        description="Join Mary Care Foundation in creating meaningful impact. Whether through volunteering your skills, collaborating on initiatives, or making a donation, your support drives our mission forward. Together, we can build brighter futures!"
      />
      <GetInvolvedPage />
    </div>
  );
}

export default Page;
