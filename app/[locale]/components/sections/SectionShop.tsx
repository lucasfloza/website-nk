"use client";

import CarouselShop from '../CarouselShop'
//intl
import { useTranslations } from "next-intl";

const SectionShop = () => {
  const t = useTranslations("Shop");

  return (
    <div className="w-full container pt-20" id="shop">
      <div>
        <h2 className="text-4xl uppercase w-full h-[200px] flex justify-center items-center">
          {t("title")}
        </h2>
      </div>

      <div className="w-full h-[40vh] bg-slate-100 flex justify-center items-center">
        {t("warning")}
        {/* <CarouselShop /> */}
      </div>
    </div>
  );
};

export default SectionShop;
