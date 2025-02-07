"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { GalleryImage } from "@/lib/types";

interface GalleryProps {
  images: GalleryImage[];
}

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image._id}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.imageUrl}
              alt={image.alt}
              fill
              priority
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
              {selectedImage.caption && (
                <p className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-center text-white">
                  {selectedImage.caption}
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
