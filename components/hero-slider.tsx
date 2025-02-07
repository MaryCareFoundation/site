"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { client } from "@/lib/sanity";

const defaultSlides = [
  {
    id: 1,
    image: "/hero_image1.png",
    title: "Supporting Mothers",
    description:
      "Providing essential care and support during pregnancy and beyond",
  },
  {
    id: 2,
    image: "/slide-2.jpg",
    title: "Empowering Girls",
    description: "Creating opportunities for young girls to thrive and succeed",
  },
  {
    id: 3,
    image: "/slide-3.jpg",
    title: "Healthcare Training",
    description: "Equipping healthcare workers with vital skills and knowledge",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(defaultSlides);

  // Fetch hero slider images from Sanity
  useEffect(() => {
    async function fetchHeroSlider() {
      try {
        const data = await client.fetch(`*[_type == "homepage"]{
          heroSlider[]{
            "imageUrl": asset->url
          }
        }`);
        if (data && data[0]?.heroSlider) {
          const formattedSlides = data[0].heroSlider.map(
            (item: any, index: number) => ({
              id: index + 1,
              image:
                item.imageUrl ??
                defaultSlides[index]?.image ??
                "/hero_image1.png",
              title: defaultSlides[index]?.title || "",
              description: defaultSlides[index]?.description || "",
            })
          );
          setSlides(formattedSlides);
        }
      } catch (error) {
        console.error("Failed to fetch hero slider images:", error);
        setSlides(defaultSlides); // Fallback to default slides if fetch fails
      }
    }

    fetchHeroSlider();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[95%] w-[80%] rounded-2xl overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title || `slide-${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
