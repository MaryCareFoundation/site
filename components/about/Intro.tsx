import React from "react";
import {
  TypographyH1,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "../typography";
import Image from "next/image";

function Intro() {
  return (
    <div>
      <div className="bg-accent max-md:pt-20  pb-20">
        <div className="container mx-auto pt-5 md:pt-[20vh]">
          <TypographyH1 className="text-secondary text-center">
            About Marycare Foundation
          </TypographyH1>
          <TypographyP className="text-[#6B6969] max-w-screen-xl text-center mx-auto">
            Mary Care Foundation (MCF), formerly known as the Maternal and Child
            Charity Pet Project, was founded in 2019 at Wesley Guide Hospital,
            Ilesha, Osun State by Mary T. Bifari. It is a non-governmental and
            non-profit organization aimed at creating an enabling environment
            supporting women during maternal and perinatal stages of pregnancy
            especially those who cannot afford materials and drugs for treatment
            and immediate help and empowering young girls, out-of-school girl
            children and unskilled young women reducing marginalization of the
            girl child in our community.
          </TypographyP>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-8 md:mt-12">
        <Image
          src="/about/down_arrow.svg"
          alt="Down Arrow"
          width={70}
          height={150}
          className="w-[30px] md:w-[50px] h-[50px] -mt-20 md:h-[100px]"
        />
      </div>
      <TypographyH3 className="text-secondary text-center mt-8">
        Origin Story
      </TypographyH3>
      <TypographyP className="text-[#6B6969] max-w-screen-xl text-center mx-auto">
        The inspiration for MCF arose at Wesley Guide Hospital, Ilesha, Osun
        State, where its founder, Mrs. Mary T. Bifarin, observed the
        heartbreaking reality of patients unable to afford vital materials and
        drugs during emergencies. Witnessing the positive impact of pooling
        resources to support maternal and pediatric care, Mrs. Bifarin launched
        the Mary Care Foundation to extend this lifesaving support and raise
        awareness about the alarming rates of maternal mortality in Nigeria.
      </TypographyP>
    </div>
  );
}

export default Intro;
