import { Building2, Users } from "lucide-react";
import { TypographyH2, TypographyH3, TypographyP } from "../typography";
import { Fragment } from "react";

interface CollaboratorProps {
  name: string;
  icon: "hospital" | "community";
}

function Collaborator({ name, icon }: CollaboratorProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {icon === "hospital" ? (
        <Building2 className="w-12 h-12 mb-4 text-white" />
      ) : (
        <Users className="w-12 h-12 mb-4 text-white" />
      )}
      <TypographyH3 className="text-white text-lg font-medium max-w-[200px]">
        {name}
      </TypographyH3>
    </div>
  );
}

function Divider() {
  return <div className="hidden md:block w-px h-24 bg-white/20 mx-4" />;
}

export default function CollaborationsSection() {
  const collaborators: CollaboratorProps[] = [
    {
      name: "OBAFEMI AWOLOWO UNIVERSITY TEACHING HOSPITAL, ILE-IFE.",
      icon: "hospital",
    },
    {
      name: "WESLEY GUILD HOSPITAL, ILESHA",
      icon: "hospital",
    },
    {
      name: "ABAGBORO COMMUNITY",
      icon: "community",
    },
    {
      name: "ENUWA, ILE-IFE",
      icon: "community",
    },
  ];

  return (
    <section className="bg-[#003B3B] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <TypographyH2 className="text-3xl font-bold text-white text-center mb-3">
          Collaborations
        </TypographyH2>
        <TypographyP className="text-white/80 text-center mb-12">
          MCF partners with esteemed organizations and communities to maximize
          its impact
        </TypographyP>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {collaborators.map((collaborator, index) => (
            <Fragment key={collaborator.name}>
              <Collaborator {...collaborator} />
              {index < collaborators.length - 1 && <Divider />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
