"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { teachers_font } from "@/lib/fonts";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
];

export function MobileNav() {
  const pathname = usePathname();
  const isCurrent = (href: string) => href === pathname;
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`${teachers_font} ${
                isCurrent(link.href) && "font-bold text-[#3C6E71]"
              } text-lg px-2 py-1 rounded-md hover:bg-accent`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/get-involved" onClick={() => setOpen(false)}>
            <Button
              variant="default"
              className="w-full mt-4 rounded-lg"
              size="lg"
            >
              Get Involved
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
