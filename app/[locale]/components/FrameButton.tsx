import React from "react";

//intl
import { useTranslations } from "next-intl";
import Link from "next/link";

export const FrameBoto = () => {
  const t = useTranslations('Main');

  return (
    <div className="w-[70%] lg:w-[80%] max-w-[450px] h-[70px]">
      <div className="relative w-full h-full top-[12px] left-[12px] bg-[#0000008f]" />
      <Link href={'#about'}>
      <button className="relative w-full h-full top-[-70px] left-[0px] hover:top-[-66px] hover:left-[4px] active:top-[-58px] active:left-[12px] transition-all duration-150 bg-[#5b655a]  ">
        <span className="w-full h-full cursor-pointer flex justify-center items-center font-normal text-white text-md">
        {t('button')}
        </span>
      </button>
      </Link>
    </div>
  );
};
