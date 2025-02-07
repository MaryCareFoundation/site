import Link from "next/link";
import { Heart, Instagram, Facebook, Twitter } from "lucide-react";
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
        <div className="grid gap-16 md:grid-cols-3">
          <div>
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Image
                src="/MCF_LOGO_white.png"
                alt="Mary Care Foundation"
                width={150}
                height={150}
              />
            </Link>
            <TypographyP className="text-sm text-white">
              Mary Care Foundation (MCF) is an NGO that was established in 2019
              to offer support to mothers in emergency cases at childbirth and
              postpartum period. MCF (with registration number: 184127), also
              contributes to young girls’ empowerment.
            </TypographyP>
            <div className="flex gap-10 mt-5">
              <Image
                src="/oau_logo.png"
                alt="OAU Logo"
                width={40}
                height={40}
              />
              <Image
                src="/liverpool_logo.png"
                alt="liverpool Logo"
                width={130}
                height={50}
              />
              <Image
                src="/oauthc_logo.png"
                alt="OAUTHC Logo"
                width={40}
                height={40}
              />
            </div>
          </div>

          <FooterNav
            title="PROGRAMS"
            links={[
              {
                href: `/blog?category=${programToBlogCategory["SAVE TIME, SAVE LIFE"]}`,
                label: "save time, save life",
              },
              {
                href: `/blog?category=${programToBlogCategory["HEALTH PRACTIONALS EMPOWERMENT PROGRAM"]}`,
                label: "health practitioner empowerment program",
              },
              {
                href: `/blog?category=${programToBlogCategory["TRAIN A GIRL CHILD PROJECT"]}`,
                label: "train a girl child project",
              },
              {
                href: `/blog?category=${programToBlogCategory["MATERNAL HEALTH RESEARCH"]}`,
                label: "maternal health research",
              },
            ]}
          />
          <div className="flex justify-between w-full">
            <FooterNav
              title="LINKS"
              links={[
                { href: "/about", label: "About" },
                { href: "/programs", label: "Programs" },
                { href: "/blog", label: "Blog" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
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
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-white font-semibold">{title}</h3>
      <ul className="space-y-6">
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
