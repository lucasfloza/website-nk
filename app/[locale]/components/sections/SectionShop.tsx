"use client";
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

      <div className="w-full h-[100vh] bg-slate-100"></div>
    </div>
  );
};

export default SectionShop;
