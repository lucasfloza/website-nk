"use client";

// Next
import Image from "next/image";

//intl
import { useTranslations } from "next-intl";

import { FrameBoto } from "../FrameButton";

const SectionMain = () => {
  const t = useTranslations("Main");

  return (
    <div className="w-full h-[100vh] max-h-[900px] lg:h-[90vh] bg-[url('/praia.jpg')] bg-cover mx-auto font-normal">
      {/* <Image
        src={"/praia.jpg"}
        alt={"Banner"}
        loading="eager"
        fill
        sizes="(min-width: 808px) 50vw, 100vw"
        style={{
          objectFit: 'cover', // cover, contain, none
        }}
        // className="bg-cover object-cover"
      /> */}
      <div className="w-full h-full container flex flex-col lg:flex-row gap-4 pt-24 bg-[rgba(255,255,255,0.12)]">
        {/* logo */}
        <div className="w-full h-full lg:w-1/2 hidden lg:flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            loading="lazy"
            width={550}
            height={550}
            className="object-contain drop-shadow-md"
          />
        </div>

        {/* text and button */}
        <div className="w-full h-full text-white lg:w-1/2 lg:h-full flex flex-col justify-start lg:justify-center items-center pt-[50px] sm:pt-[80px] lg:pt-[60px] pb-[60px] px-5 z-10">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl pb-10 z-10">
            {t("title")}
          </h1>
          <p className="text-center text-sm sm:text-md pb-10 sm:pb-16 lg:pb-20 px-1 sm:px-4  xl:px-14 z-10">
            {t("subtitle")}
          </p>

          <FrameBoto />
        </div>
      </div>
      <div className="relative bottom-0  w-full h-[100px] lg:h-[100px] bg-white shadow-forcast"/>
    </div>
  );
};

export default SectionMain;
