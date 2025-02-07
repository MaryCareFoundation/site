import Image from "next/image";
import { TypographyH2, TypographyH3, TypographyP } from "../typography";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Mrs. Mary T. Bifarin",
      role: "Founder/C.E.O",
      image: "/MAMA_T.jpg",
    },
    {
      name: "Mrs. Mary T. Bifarin",
      role: "Founder/C.E.O",
      image: "/MAMA_T.jpg",
    },
    {
      name: "Mrs. Mary T. Bifarin",
      role: "Founder/C.E.O",
      image: "/MAMA_T.jpg",
    },
    {
      name: "Mrs. Mary T. Bifarin",
      role: "Founder/C.E.O",
      image: "/MAMA_T.jpg",
    },
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <TypographyH2 className="text-center text-3xl font-medium mb-12">
        Meet the team
      </TypographyH2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-4">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-emerald-900/10" />
            </div>
            <TypographyH3 className="text-lg font-medium text-center">
              {member.name}
            </TypographyH3>
            <TypographyP className="text-sm text-center">
              {member.role}
            </TypographyP>
          </div>
        ))}
      </div>
    </section>
  );
}
