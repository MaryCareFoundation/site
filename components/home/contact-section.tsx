"use client";

import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  X,
  Loader,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TypographyH2, TypographyH3, TypographyP } from "../typography";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: typeof formData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev: typeof formData) => ({
      ...prev,
      category: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        category: formData.category,
        message: formData.message,
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!, // Replace with your EmailJS service ID
        process.env.NEXT_PUBLIC_TEMPLATE_ID!, // Replace with your EmailJS template ID
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_KEY! // Replace with your EmailJS user ID
      );

      if (response.status === 200) {
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          category: "",
          message: "",
        });
        toast({
          title: "Success",
          description: "Message sent successfully!",
          variant: "default",
        });
        setLoading(false);
      } else {
        console.log(response, "resp");

        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.log(error, "error");
      setLoading(false);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 mt-10">
      <div className="container mx-auto">
        <TypographyH2 className=" font-bold text-center text-secondary mb-4">
          Contact us
        </TypographyH2>
        <TypographyP className="text-center text-secondary text-lg mb-12">
          You can contact us through the following means:
        </TypographyP>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 mt-20">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-secondary mt-1 " />
              <p className="text-gray-700">
                Shop 7, Cooperative Building, Behind Medical Emergency
                Department, OAUTHC, Ile-Ife.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-secondary " />
              <a
                href="mailto:marycarefoundationofficial@gmail.com"
                className="text-gray-700 hover:text-secondary"
              >
                marycarefoundationofficial@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-secondary " />
              <a
                href="tel:07058811900"
                className="text-gray-700 hover:text-secondary"
              >
                +2347058811900
              </a>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-3">
                <Facebook className="w-6 h-6 text-secondary" />
                <a
                  href="https://facebook.com/MarycareFoudation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-secondary"
                >
                  Marycare Foundation
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="w-6 h-6 text-secondary" />
                <a
                  href="https://instagram.com/marycarefoundationofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-secondary"
                >
                  @marycarefoundationofficial
                </a>
              </div>

              <div className="flex items-center gap-3">
                <X className="w-6 h-6 text-secondary" />
                <a
                  href="https://twitter.com/MCFofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-secondary"
                >
                  @MCFofficial
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f5fbfb] p-10 rounded-lg mb-10">
            <TypographyH3 className="text-center text-xl font-bold text-gray-900 mb-6">
              SEND US A MESSAGE
            </TypographyH3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="bg-white"
                  required
                />
                <div>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="bg-white"
                    required
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1/2">
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="bg-white"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <Select
                      onValueChange={handleSelectChange}
                      value={formData.category}
                    >
                      <SelectTrigger className="bg-white w-full gap-20 border-none">
                        <SelectValue
                          placeholder="Potential beneficiary"
                          className="text-gray-400 placeholder:text-gray-400"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mother">Mother</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="healthcare-worker">
                          Healthcare Worker
                        </SelectItem>
                        <SelectItem value="researcher">Researcher</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write us a message..."
                  className="min-h-[120px] bg-white border-none"
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <Button type="submit" size={"lg"} disabled={loading}>
                  {loading ? <Loader className="animate-spin" /> : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
