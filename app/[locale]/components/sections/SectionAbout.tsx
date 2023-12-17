"use client";

import ImageSlider from "../ui/ImageSlider";

//intl
import { useTranslations } from "next-intl";

const images = [
  "/praia-2.jpg",
  "/praia.jpg",
  "/praia-1.jpg",
  "/surf.jpg",
];

const SectionAbout = () => {
  const t = useTranslations("About");

  return (
    <div className="w-full container pt-20" id="about">
      <h2 className="text-4xl uppercase w-full h-[200px] flex justify-center items-center">
        {t("title")}
      </h2>

      <div className="w-full h-auto flex flex-col lg:flex-row bg-pink-400 justify-center items-center">
        <div className="w-full h-full lg:w-1/2 flex justify-center items-center bg-pink-700">
            <ImageSlider images={images}/>
        </div>
        <div className="w-full h-auto lg:w-1/2 lg:h-full text-center flex justify-center items-center p-10 rounded-[10px] bg-[rgba(235,234,234,0.44)]">
          <p>
            {t("text")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
