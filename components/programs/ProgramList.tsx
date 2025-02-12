import React from "react";
import ProgramCard from "./ProgramsCard";
const programs = [
  {
    title: "SAVE TIME, SAVE LIFE",
    goal: "Provide support to care for pregnant women and babies without delay.",
    description:
      "We provide immediate healthcare, drugs, materials, and other medical consumables to patients in dire need for pregnant women and their babies who have enrolled under the foundation and at maternal and pediatric sections. We also collaborate with individuals and hospitals to support pregnant mothers and children in need. We procure packs for emergency cesarean section packs to be donated to the Labour wards of clinics and hospitals. OAUTHC, Ile-Ife Osun state and Wesley Guild Hospital, Ilesa, Osun state have beneficiaries.",
    image: "/mother_daughter.jpeg",
    icon: "time" as const,
  },
  {
    title: "HEALTH PRACTITIONERS EMPOWERMENT PROGRAM",
    goal: "Provide training for healthcare workers through seminars and workshops.",
    description:
      "We organize trainings for health care workers towards capacity building. Page 6 of 10 We improve nursing and healthcare in emergencies while addressing the issue of delay in accessing peak healthcare. With this program, we equip, support and enhance the efficiency and development of health practitioners and supporting stakeholders. This helps us to deliver quality, safe and best global practices for MCH to mothers and babies.",
    image: "/vision-mission-image.png",
    icon: "health" as const,
  },
  {
    title: "TRAIN A GIRL CHILD PROJECT",
    goal: "Educational support, training, and capacity development to inspire and empower young girls.",
    description:
      "We train and empower marginalized young girls in our community. We provide educational support, scholarships, skills acquisition and capacity development opportunities to inspire, build and empower young women and girls in the society.",
    image: "/train_girl.jpeg",
    icon: "education" as const,
  },
  {
    title: "MATERNAL HEALTH RESEARCH",
    goal: "Collaboration with researchers and specialists to build research  capabilities and contribute to our local community.",
    description:
      "We collaborate with researchers and specialists to build research  capabilities in our local community.",
    image: "/medical_lab.jpeg",
    icon: "stethoscope" as const,
  },
];
function ProgramList() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramList;
