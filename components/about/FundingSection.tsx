"use client";
import React from "react";
import { TypographyH2, TypographyP } from "../typography";
import Image from "next/image";
import { Button } from "../ui/button";
import { Heart, Link } from "lucide-react";
import { useRouter } from "next/navigation";

function FundingSection() {
  const router = useRouter();
  return (
    <div className="container mx-auto py-12">
      <div>
        <TypographyH2 className="text-center">Funding</TypographyH2>
        <TypographyP className="text-center">
          The foundation’s activities are made possible through generous
          donations from philanthropic individuals and organizations. These
          funds are utilized to provide drugs, treatments, educational support,
          and empowerment programs.
        </TypographyP>
        <div className="flex items-center gap-10 mx-auto justify-center mt-8">
          <Image
            src="/about/donate.png"
            alt="Funding"
            width={300}
            height={300}
          />
          <div>
            <TypographyP className="text-2xl font-bold max-w-xl">
              YOU CAN ALSO BE A PART OF SOMEONE’S GREAT STORY, DONATE NOW!!
            </TypographyP>
            <Button
              variant="default"
              size="lg"
              className="mt-4"
              onClick={() => router.push("/get-involved")}
            >
              Donate Now <Heart fill="white" size={20} />
            </Button>
          </div>
        </div>
      </div>
      <TypographyH2 className="text-center mx-auto text-secondary mt-20">
        Founders’ Vision
      </TypographyH2>
      <div className="flex max-md:flex-col items-center gap-10 mx-auto justify-center mt-20">
        <Image
          src={"/MAMA_T.jpg"}
          alt="Mary Bifarin"
          width={300}
          height={300}
        />
        <div>
          <TypographyP className="max-w-prose">
            Mrs. Mary T. Bifarin, the visionary behind MCF, is a retired
            Registered Nurse, Midwife, and Perioperative Nurse with a Bachelor’s
            degree in Nursing. Her illustrious career includes serving as the
            Director of Nursing at Obafemi Awolowo University Teaching Hospital
            Complex, Ile-Ife. Her deep concern for patients’ inability to afford
            emergency treatments fueled her passion to establish MCF. Even
            post-retirement, Mrs. Bifarin continues to advance her education,
            currently pursuing a Master’s degree at ABUAD.
          </TypographyP>
          <br />
          <TypographyP className="font-bold">
            Mrs. Mary T. Bifarin (Founder)
          </TypographyP>
        </div>
      </div>
    </div>
  );
}

export default FundingSection;
