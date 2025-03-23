import { Building2, Users } from "lucide-react";
import { TypographyH2, TypographyH3, TypographyP } from "../typography";
import { Fragment } from "react";
import Image from "next/image";

interface CollaboratorProps {
  name: string;
  icon?: "hospital" | "community";
  image?: React.ReactNode;
}

function Collaborator({ name, icon,image }: CollaboratorProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-[70px] overflow-hidden flex items-center justify-center mb-4">

      {image}
      </div>
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
      image:    <Image
                      src="/oauthc_logo.jpg"
                      alt="OAUTHC Logo"
                      width={70}
                      height={70}
                      style={{ objectFit: "contain" }}
                      className="rounded-full"
                    />
    },
    {
      name: "WESLEY GUILD HOSPITAL, ILESHA(Loocal Communities (Enuwa, ABAGBORO))",
      icon: "hospital",
      image:  <Image
                      src="/wesley_guild.png"
                      alt="Wesley Logo"
                      width={70}
                      height={70}
                      style={{ objectFit: "contain" }}
                    />
    },
    {
      name: "JOS UNIVERSITY TEACHING HOSPITAL, JOS, NIGERIA",
      icon: "community",
      image:  <Image
                      src="/JUTH-Logo.jpg"
                      alt="JUTH Logo"
                      width={70}
                      height={70}
                      style={{ objectFit: "contain" }}
                    />
    },
    {
      name: "LIVERPOOL JOHN MOORES UNIVERSITY, LIVERPOOL, UK",
      icon: "community",
      image:   <Image
                      src="/liverpool-logo-colored.webp"
                      alt="liverpool Logo"
                      width={180}
                      height={60}
                      style={{ objectFit: "contain" }}
                    />
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
