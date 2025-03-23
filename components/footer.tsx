import Link from "next/link";
import { Heart, Instagram, Facebook, Twitter, X, InstagramIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographySpan,
} from "./typography";
import { programToBlogCategory } from "@/lib/utils/program-categories";

export function Footer() {
  return (
    <footer className="border-t bg-[#002B2E]">
      <div className="container mx-auto py-8">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Image
                src="/MCF_LOGO_white.png"
                alt="Mary Care Foundation"
                width={200}
                height={200}
                quality={100}
              />
            </Link>
            <TypographyP className="text-sm text-white">
              Mary Care Foundation (MCF) is an NGO that was established in 2019
              to offer support to mothers in emergency cases at childbirth and
              postpartum period. MCF (with registration number: 184127), also
              contributes to young girls’ empowerment.
            </TypographyP>
            <div className="flex items-center max-md:flex-wrap gap-10 mt-5">
              <Image
                src="/oau_logo.webp"
                alt="OAU Logo"
                width={70}
                height={70}
                style={{ objectFit: "contain" }}
                className="max-md:w-[60px] max-md:h-[60px]"
              />
              <Image
                src="/liverpool_logo.svg"
                alt="liverpool Logo"
                width={180}
                height={100}
                style={{ objectFit: "contain" }}
 className="max-md:w-[100px] max-md:h-[100px]"
              />
              <Image
                src="/oauthc_logo.jpg"
                alt="OAUTHC Logo"
                width={70}
                height={70}
                style={{ objectFit: "contain" }}
                className="rounded-full"
 className="max-md:w-[60px] max-md:h-[60px]"
              />
            </div>
          </div>

        
          <div className="flex md:justify-evenly max-md:gap-20 w-full">
            <FooterNav
              title="LINKS"
              links={[
                { href: "/about", label: "About" },
                { href: "/programs", label: "Programs" },
                { href: "/blog", label: "Blog" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
                { href: "/faq", label: "Faq" },
              ]}
            />

<FooterNav
            title="Socials"
            row
            links={[
              {
                href: `https://facebook.com/profile.php?id=100093809224156&mibextid=LQQJ4d`,    
                label:  <Facebook className="w-6 h-6 text-white" />,
              },
              {
                href: `https://instagram.com/marycarefoundationofficial`,
                label:   <InstagramIcon className="w-6 h-6 text-white" />,
              },
              {
                href: `https://twitter.com/MCFofficial`,
                label:  <X className="w-6 h-6 text-white" />,
              },
      
            ]}
          />
          </div>
        </div>

        <TypographyP className="mt-8 border-t pt-8 text-center text-sm text-white">
          © {new Date().getFullYear()} Mary Care Foundation. All rights
          reserved.
        </TypographyP>
      </div>
    </footer>
  );
}

function FooterNav({
  title,
  links,
  row
}: {
  title: string;
  links: { href: string; label: string | React.ReactNode }[];
  row?: boolean;
}) {
  return (
    <div>
      <h3 className="mb-4 text-white font-semibold">{title}</h3>
      <ul className={`${row ? "flex items-center gap-6": "space-y-6 "}`}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} passHref>
              <TypographySpan className=" underline text-white">
                {link.label}
              </TypographySpan>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
