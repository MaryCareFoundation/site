import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, UserPlus, GraduationCap, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { programToBlogCategory } from "@/lib/utils/program-categories";

const programs = [
  {
    icon: Clock,
    title: "Save Time, Save Life",
    description:
      "Comprehensive support for pregnant women and their babies throughout their journey.",
    details: [
      "Prenatal care and education",
      "Labor and delivery support",
      "Postpartum care and counseling",
      "Infant health monitoring",
    ],
  },
  {
    icon: UserPlus,
    title: "Health Practitioners Empowerment",
    description:
      "Training and resources for healthcare workers to improve maternal care.",
    details: [
      "Professional development workshops",
      "Medical equipment training",
      "Best practices education",
      "Emergency response preparation",
    ],
  },
  {
    icon: GraduationCap,
    title: "Train a Girl Child",
    description:
      "Educational support and empowerment programs for marginalized girls.",
    details: [
      "Academic scholarships",
      "Mentorship programs",
      "Life skills training",
      "Career guidance",
    ],
  },
  {
    icon: Microscope,
    title: "Maternal Health Research",
    description:
      "Collaborative research to enhance healthcare practices and outcomes.",
    details: [
      "Clinical studies",
      "Data collection and analysis",
      "Healthcare policy recommendations",
      "Community health assessments",
    ],
  },
];

export function Programs() {
  return (
    <div className="container mx-auto py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Our Programs</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Through our comprehensive programs, we work to improve maternal health
          outcomes and create opportunities for young girls to thrive.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {programs.map((program) => {
          const Icon = program.icon;
          const categorySlug =
            programToBlogCategory[
              program.title as keyof typeof programToBlogCategory
            ];

          return (
            <Card
              key={program.title}
              className="transition-transform hover:-translate-y-1"
            >
              <CardHeader>
                <Icon className="mb-2 h-8 w-8 text-[#3C6E71]" />
                <CardTitle className="text-2xl">{program.title}</CardTitle>
                <CardDescription className="text-lg">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="ml-6 list-disc space-y-2">
                  {program.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <Button
                  variant="link"
                  className="text-[#3C6E71] text-xl text-center mx-auto flex items-center justify-center underline p-0 hover:text-[#3C6E71]/80"
                  size="lg"
                  asChild
                >
                  <Link href={`/blog?category=${categorySlug}`}>
                    CHECK OUT OUR BLOGS ON THIS PROGRAM →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
