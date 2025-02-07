import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "About Us - Mary Care Foundation",
  description:
    "Learn about Mary Care Foundation's mission, vision, and the journey that fuels our commitment to maternal health and girls empowerment.",
  keywords: [
    "About Us",
    "Mary Care Foundation",
    "Maternal Health",
    "Girls Empowerment",
    "NGO",
  ],
  openGraph: {
    title: "About Mary Care Foundation",
    description:
      "Discover our mission and vision behind transforming maternal health and empowering young girls.",
    url: "https://marycarefoundation.org/about",
  },
  twitter: {
    card: "summary",
    title: "About Mary Care Foundation",
    description:
      "Explore the journey and story that drives our impactful work in maternal health and empowerment.",
  },
};
function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default layout;
