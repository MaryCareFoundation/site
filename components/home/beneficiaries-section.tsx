"use client";
import Image from "next/image";
import { TypographyH2, TypographySpan } from "../typography";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity";

export default function BeneficiariesSection() {
  const [beneficiaries, setBeneficiaries] = useState([
    {
      title: "Mothers (Maternal & Perinatal)",
      imageUrl: "/hero_image1.png", // Placeholder image
      className: "col-span-2 md:col-span-1",
    },
    {
      title: "Young girls (Empowerment)",
      imageUrl: "/hero_image1.png", // Placeholder image
      className: "col-span-2 md:col-span-1",
    },
    {
      title: "Healthcare workers, researchers and local communities.",
      imageUrl: "/hero_image1.png", // Placeholder image
      className: "col-span-2 md:col-span-1",
    },
  ]);

  // Fetch beneficiaries data from Sanity
  useEffect(() => {
    async function fetchBeneficiaries() {
      try {
        const data = await client.fetch(`*[_type == "homepage"]{
          beneficiaries[]{
            title,
 "imageUrl": imageUrl.asset->url
          }
        }`);

        if (data && data[0]?.beneficiaries) {
          const formattedData = data[0].beneficiaries.map(
            (
              item: {
                title: string;
                imageUrl: string;
              },
              index: number
            ) => ({
              title: item.title,
              imageUrl: item.imageUrl || "/hero_image1.png", // Fallback to placeholder
              className: "col-span-2 md:col-span-1",
            })
          );
          console.log(data, "data");

          setBeneficiaries(formattedData);
        }
      } catch (error) {
        console.error("Failed to fetch beneficiaries:", error);
      }
    }

    fetchBeneficiaries();
  }, []);

  return (
    <section className="py-12 ">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <TypographyH2 className="text-3xl text-secondary font-bold">
            Our Beneficiaries
          </TypographyH2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {beneficiaries.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group rounded-lg ${item.className}`}
            >
              <div className="aspect-square rounded-lg bg-accent">
                <Image
                  src={item.imageUrl}
                  alt={"beneficiary-" + index}
                  fill
                  className="object-cover opacity-80 transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white rounded-full bg-opacity-60 backdrop-blur-md m-10">
                  <TypographySpan className="text-sm md:text-xl font-medium">
                    {item.title}
                  </TypographySpan>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
