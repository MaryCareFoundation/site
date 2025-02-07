import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Blog - Mary Care Foundation",
  description:
    "Read the latest stories, updates, and insights into the life-changing work at Mary Care Foundation. Stay informed on our programs and initiatives.",
  keywords: [
    "Blog",
    "Maternal Health",
    "Girls Empowerment",
    "NGO",
    "Stories",
    "Updates",
  ],
  openGraph: {
    title: "Mary Care Foundation Blog",
    description:
      "Explore engaging posts on maternal health, girls empowerment, and our community programs.",
    url: "https://marycarefoundation.org/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mary Care Foundation Blog",
    description:
      "Get the latest insights and success stories driving change in maternal health and girls empowerment.",
  },
};
function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default layout;
