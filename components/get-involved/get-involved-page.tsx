"use client";
import { useState } from "react";
import { ActionCard } from "../ui/action-card";
import { DonationForm } from "../donation-form";
import { VolunteerForm } from "../volunteer-form";
import { FadeIn } from "../animations/fade-in";

export default function GetInvolvedPage() {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <FadeIn delay={0.2} direction="up">
        <ActionCard
          title="DONATE"
          description="To continue making our activities possible, your support would be much appreciated, either in cash or via any means. We gratefully receive donations via:"
          image="/about/donate.png"
          details={
            <div className="space-y-1 text-gray-900 font-bold">
              <p>Mary Care Foundation</p>
              <p>Bank: Zenith Bank</p>
              <p>Account No: 1228537710</p>
            </div>
          }
          buttonText="Donate"
          onAction={() => setShowDonateModal(true)}
        />
      </FadeIn>

      <FadeIn delay={0.4} direction="left">
        <ActionCard
          title="VOLUNTEER"
          description="You may join us during our programs, events and outreaches and offer support on the following tasks:"
          image="/volunteer.jpeg"
          details={
            <ul className="space-y-1 text-gray-600">
              <li>• Writing Services</li>
              <li>• Video Content creation</li>
              <li>• Graphics Design</li>
              <li>• Social Media Management</li>
              <li>• Website support</li>
            </ul>
          }
          buttonText="Volunteer"
          onAction={() => setShowVolunteerModal(true)}
        />
      </FadeIn>

      <FadeIn delay={0.6} direction="right">
        <ActionCard
          title="COLLABORATE"
          description="We also welcome collaborations from organizations with aligned interests. Kindly reach out to us anytime."
          image="/collaborate.jpeg"
          buttonText="Collaborate"
        />
      </FadeIn>

      {showDonateModal && (
        <DonationForm onClose={() => setShowDonateModal(false)} />
      )}

      {showVolunteerModal && (
        <VolunteerForm onClose={() => setShowVolunteerModal(false)} />
      )}
    </div>
  );
}
