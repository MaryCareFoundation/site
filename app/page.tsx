import { client } from "@/lib/sanity";
import { homepageQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import BeneficiariesSection from "@/components/home/beneficiaries-section";
import ContactSection from "@/components/home/contact-section";
import FAQSection from "@/components/home/faq-section";
import HeroSection from "@/components/home/hero-section";
import ProgramsSection from "@/components/home/programs-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import type { HomepageSection } from "@/lib/types";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <VisionMissionSection />
      <ProgramsSection />
      <BeneficiariesSection />
      <TestimonialsSection />

      {/* {homepage?.sections
        ?.sort((a, b) => a.order - b.order)
        .map((section) => (
          <section key={section._id} className="py-16">
            <div className="container">
              <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
              <div className="prose max-w-none">
                <PortableText value={section.description} />
              </div>
            </div>
          </section>
        ))} */}
    </main>
  );
}
