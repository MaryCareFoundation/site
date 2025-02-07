import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/typography";
import Image from "next/image";
import { teachers_font } from "@/lib/fonts";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-8">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src="/MCF_LOGO.png"
            alt="Mary Care Foundation"
            fill
            className="object-contain"
          />
        </div>
        
        <TypographyH1 className={`${teachers_font} text-6xl font-bold text-[#3C6E71] mb-4`}>
          404
        </TypographyH1>
        
        <div className="space-y-4">
          <TypographyH1 className="text-3xl font-semibold">
            Page Not Found
          </TypographyH1>
          <TypographyP className="text-muted-foreground text-lg">
            Oops! The page you&apos;re looking for doesn&apos;t exist. You might have mistyped the address or the page may have moved.
          </TypographyP>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            asChild
            variant="default"
            size="lg"
            className="rounded-lg"
          >
            <Link href="/">
              Return Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-lg"
          >
            <Link href="/contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 