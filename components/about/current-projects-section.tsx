import { TypographyH2, TypographyP } from "../typography";
import ProjectCard from "./project-card";

export default function CurrentProjectsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <TypographyH2 className="text-3xl font-bold text-center text-[#2F6F6F] mb-12">
          Current Projects
        </TypographyH2>

        <div className="space-y-12">
          <ProjectCard
            title="Building Capacity to Prevent Adverse Childhood Experiences"
            image="/about/child-experience.png"
              link="/about/1"
          >
            <ul className="space-y-3">
              <li>
                <TypographyP >
                Collaboration with Liverpool John Moores University (2024)
                </TypographyP>
              </li>
              <li>
                <TypographyP >
                Research on healthcare workers' knowledge and practices
                </TypographyP>
            </li>

              <li className="pl-6">
                <TypographyP>
                  Status: Ongoing
                </TypographyP>
                </li>
            </ul>
          </ProjectCard>

          <ProjectCard
            title="School Outreaches"
            image="/about/school-outreach.png"
          >
            <TypographyP>
              Educational and skills development programs for young girls and
              out-of-school children.
            </TypographyP>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}
