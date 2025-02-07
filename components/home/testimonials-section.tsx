"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TypographyH2, TypographyP, TypographySpan } from "../typography";
import OverlappingImage from "../OverlappingImage";
import { useEffect } from "react";
import { client } from "@/lib/sanity";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
}

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add this at the start of your component
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Add this useEffect
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const data = await client.fetch(`*[_type == "homepage"]{
        testimonials[]{
          "id": _key,
          "name": person,
          "quote": text,
          "image": image.asset->url
        }
      }`);

        if (data && data[0]?.testimonials) {
          setTestimonials(data[0].testimonials);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
        // Fallback to default testimonials if fetch fails
        setTestimonials([
          {
            id: 1,
            name: "Funke Oladele",
            quote: "This organization has been a blessing...",
            image: "/testimonial-1.png",
          },
          // ... other default testimonials
        ]);
      }
    }

    fetchTestimonials();
  }, []);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <TypographyH2 className="text-secondary text-4xl font-bold text-center mb-12 ">
          Testimonials
        </TypographyH2>

        <div className="relative shadow shadow-[#AEF35A36] py-5">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 rounded-full p-2  hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-8 h-8 text-secondary" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 rounded-full p-2  hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-8 h-8 text-secondary" />
          </button>

          {/* Testimonial Card */}
          <div className="rounded-lg  p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid relative md:grid-cols-[350px_1fr] gap-6 items-center">
                <div className="relative w-40 h-40 md:w-[290px] md:h-[300px] mx-auto md:mx-0">
                  <div className="w-[90%] ">
                    <OverlappingImage
                      src={
                        testimonials[currentSlide]?.image ??
                        "/testimonial-1.png"
                      }
                      alt={
                        testimonials[currentSlide]?.name ??
                        "This organization has been a blessing. Their support during my pregnancy was invaluable, and their programs for young girls are truly inspiring. They make a real difference in our community. I'm forever grateful."
                      }
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <TypographySpan className="text-lg md:text-xl  mb-4">
                    "{testimonials[currentSlide]?.quote}"
                  </TypographySpan>
                  <TypographyP className="font-semibold text-xl text-gray-900">
                    {testimonials[currentSlide]?.name}
                  </TypographyP>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-secondary w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Update the Testimonial interface
interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
}
