import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { TypographyH2, TypographyP } from "../typography";
import Link from "next/link";

interface ActionCardProps {
  title: string;
  description: string;
  image: string;
  details?: React.ReactNode;
  buttonText: string;
  onAction?: () => void;
}

export function ActionCard({
  title,
  description,
  image,
  details,
  buttonText,
  onAction,
}: ActionCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start py-12">
      <div className="w-full md:w-1/3">
        <div className="rounded-2xl bg-accent w-fit max-h-[400px] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={400}
            className="rounded-2xl object-cover opacity-70"
          />
        </div>
      </div>
      <div className="w-full md:w-2/3 space-y-4">
        <TypographyH2 className="text-2xl font-bold text-[#003B3B]">
          {title}
        </TypographyH2>
        <TypographyP className="text-gray-600">{description}</TypographyP>
        {details}
        {title == "COLLABORATE" ? (
          <Link
            href={`mailto:email=marycarefoundationofficial@gmail.com&subject=${encodeURIComponent("Collaboration Inquiry")}`}
          >
            <Button className="bg-[#003B3B] hover:bg-[#2F6F6F]">
              {buttonText}
            </Button>
          </Link>
        ) : (
          <Button
            onClick={onAction}
            className="bg-[#003B3B] hover:bg-[#2F6F6F]"
          >
            {buttonText}
            {title === "DONATE" && <Heart className="ml-2 h-4 w-4" />}
          </Button>
        )}
      </div>
    </div>
  );
}
