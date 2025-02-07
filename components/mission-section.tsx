import { Target, Heart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MissionSection() {
  return (
    <div className="bg-[#86af3b]">
      <section className="container mx-auto  py-16">
        <div className="flex flex-col items-center">
          <Card className="bg-[#3C6E71]  text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6" />
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              Create comprehensive maternal and perinatal support systems while
              empowering young girls for a brighter future.
            </CardContent>
          </Card>

          <Card className="bg-[#70AE6E] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              Address critical challenges in women's perinatal health and combat
              the marginalization of young girls through education and support.
            </CardContent>
          </Card>

          <Card className="bg-[#F4743B] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              Supporting mothers, empowering girls, training healthcare workers,
              and fostering community development through research and outreach.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
