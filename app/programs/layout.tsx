import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Programs - Mary Care Foundation",
  description:
    "Discover our tailored programs designed to improve maternal health outcomes and empower young girls. Explore training, research, and community initiatives.",
  keywords: [
    "Programs",
    "Maternal Health",
    "Girls Empowerment",
    "Training",
    "Research",
    "Community",
  ],
  openGraph: {
    title: "Our Programs - Mary Care Foundation",
    description:
      "Learn about our impactful programs that address maternal healthcare and girls empowerment.",
    url: "https://marycarefoundation.org/programs",
  },
  twitter: {
    card: "summary",
    title: "Our Programs",
    description:
      "Explore the programs driving change in maternal health and girls empowerment at Mary Care Foundation.",
  },
};
function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default layout;
