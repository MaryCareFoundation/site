"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TypographySpan } from "../typography";
import { GalleryImage } from "@/lib/types";

interface GalleryProps {
  images: GalleryImage[];
}

export default function ImageCarousel({ images }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return (
      <div className="max-w-5xl mx-auto md:p-10 mt-10 text-center">
        <p className="text-lg font-semibold">No images available</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto md:p-10 mt-10">
      <div className="relative overflow-visible p-10">
        {/* Decorative background */}
        <Image
          src={"/gallery/gradient-rough.svg"}
          alt="Decorative background"
          width={2500}
          height={2500}
          className="absolute left-0"
        />
        {/* Main image */}
        <div className="relative aspect-[16/10] bg-accent rounded-3xl overflow-hidden">
          <Image
            src={images[currentIndex]?.imageUrl || "/placeholder.svg"}
            alt={images[currentIndex]?.alt}
            fill
            className="object-cover opacity-80"
            priority
          />

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Caption */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="bg-white/90 px-2 md:px-4 py-2 rounded-full text-xs n">
              <TypographySpan>{images[currentIndex]?.caption}</TypographySpan>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-7 flex gap-2 overflow-x-auto pb-4 px-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "flex-shrink-0 relative aspect-[4/3] w-40 rounded-lg overflow-hidden transition-opacity",
              currentIndex === index
                ? "ring-2 ring-primary"
                : "opacity-70 hover:opacity-100"
            )}
          >
            <Image
              src={image?.imageUrl || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
