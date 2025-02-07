import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import FAQSection from "@/components/home/faq-section";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mary Care Foundation - Maternal Health & Girls Empowerment",
  description:
    "Supporting mothers and empowering young girls through comprehensive healthcare, education, and community outreach.",
  keywords: [
    "Maternal Health",
    "Girls Empowerment",
    "Healthcare",
    "Education",
    "NGO",
  ],
  openGraph: {
    title: "Mary Care Foundation",
    description:
      "Transforming lives with innovative programs in maternal healthcare and girls empowerment.",
    url: "https://marycarefoundation.org",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Mary Care Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mary Care Foundation",
    description:
      "Supporting mothers in need and empowering girls to thrive through community outreach.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <FAQSection />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
