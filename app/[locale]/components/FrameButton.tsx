import React from "react";

//intl
import { useTranslations } from "next-intl";
import Link from "next/link";

export const FrameBoto = () => {
  const t = useTranslations('Main');

  return (
    <div className="w-[100%] md:w-[80%] max-w-[450px] h-[90px]">
      <div className="relative w-full h-[90px] top-[12px] left-[12px] bg-[#0000008f]" />
      <Link href={'#about'}>
      <button className="relative w-full h-[90px] top-[-90px] left-[0px] hover:top-[-86px] hover:left-[4px] active:top-[-78px] active:left-[12px] transition-all duration-150 bg-[#5b655a]  ">
        <span className="w-full h-full cursor-pointer flex justify-center items-center font-normal text-white text-[23px]">
        {t('button')}
        </span>
      </button>
      </Link>
    </div>
  );
};
