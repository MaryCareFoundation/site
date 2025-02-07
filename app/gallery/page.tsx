import ImageCarousel from "@/components/gallery/image-carousel";
import { client } from "@/lib/sanity";
import { galleryQuery } from "@/lib/queries";
import { Gallery } from "@/components/gallery/Gallery";
import { Suspense } from "react";
import IntroSection from "@/components/IntroSection";
import type { GalleryImage } from "@/lib/types";

export const revalidate = 60;

export default async function GalleryPage() {
  let images: GalleryImage[] = [];
  try {
    images = await client.fetch<GalleryImage[]>(galleryQuery);
  } catch (error) {
    console.log(error, "error");
  }

  return (
    <>
      <IntroSection
        title="Gallery"
        description="Welcome to our gallery! Explore powerful moments captured from our programs, events, and community outreach efforts. Each image tells a story of hope, resilience, and the incredible change made possible through your support. Take a journey through the work we’re doing together to create a brighter future."
      />
      <ImageCarousel images={images} />
    </>
  );
}
