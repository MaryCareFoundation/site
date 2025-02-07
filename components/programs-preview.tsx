import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, UserPlus, GraduationCap, Microscope } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    icon: Clock,
    title: "Save Time, Save Life",
    description:
      "Comprehensive support for pregnant women and their babies throughout their journey.",
  },
  {
    icon: UserPlus,
    title: "Health Practitioners Empowerment",
    description:
      "Training and resources for healthcare workers to improve maternal care.",
  },
  {
    icon: GraduationCap,
    title: "Train a Girl Child",
    description:
      "Educational support and empowerment programs for marginalized girls.",
  },
  {
    icon: Microscope,
    title: "Maternal Health Research",
    description:
      "Collaborative research to enhance healthcare practices and outcomes.",
  },
];

export function ProgramsPreview() {
  return (
    <section className="container mx-auto py-16">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold">Our Programs</h2>
        <p className="text-muted-foreground">
          Making a difference through targeted initiatives
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {programs.map((program) => {
          const Icon = program.icon;
          return (
            <Card
              key={program.title}
              className="transition-transform hover:-translate-y-1"
            >
              <CardHeader>
                <Icon className="mb-2 h-8 w-8 text-[#3C6E71]" />
                <CardTitle className="text-lg">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Button asChild size="lg" className="bg-[#70AE6E] hover:bg-[#5a8e58]">
          <Link href="/programs">Learn More About Our Programs</Link>
        </Button>
      </div>
    </section>
  );
}
