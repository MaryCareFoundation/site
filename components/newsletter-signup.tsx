"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our newsletter updates soon.",
    });
    setEmail("");
  };

  return (
    <section className="bg-[#BEEE62] py-16">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-2xl font-bold">Stay Updated</h2>
        <p className="mb-6 text-muted-foreground">
          Join our newsletter to receive updates about our programs and impact.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white"
          />
          <Button type="submit" className="bg-[#F4743B] hover:bg-[#d65e2d]">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
