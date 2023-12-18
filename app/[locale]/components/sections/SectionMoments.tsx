"use client";

//next
import Link from "next/link";

import Image from "next/image";

//intl
import { useTranslations } from "next-intl";

let dataGrid = [
  {
    title: "01",
    description: "Lorem ipsum of the running test",
    link: "moments/01",
    image: "/praia-1.jpg",
    style: "lg:col-span-3",
  },
  {
    title: "02",
    description: "Lorem ipsum of the running test",
    link: "/moments/02",
    image: "/praia-2.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "03",
    description: "Lorem ipsum of the running test",
    link: "/moments/03",
    image: "/praia4.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "04",
    description: "Lorem ipsum of the running test",
    link: "/moments/04",
    image: "/praia.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "05",
    description: "Lorem ipsum of the running test",
    link: "/moments/05",
    image: "/veraneio-2.jpg",
    style: "lg:col-span-2",
  },
  {
    title: "06",
    description: "Lorem ipsum of the running test",
    link: "/moments/06",
    image: "/praia-1.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "07",
    description: "Lorem ipsum of the running test",
    link: "/moments/07",
    image: "/praia-2.jpg",
    style: "lg:col-span-2",
  },
  {
    title: "08",
    description: "Lorem ipsum of the running test",
    link: "/moments/08",
    image: "/praia4.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "09",
    description: "Lorem ipsum of the running test",
    link: "/moments/09",
    image: "/praia.jpg",
    style: "lg:col-span-2",
  },
  {
    title: "10",
    description: "Lorem ipsum of the running test",
    link: "/moments/10",
    image: "/veraneio-2.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "11",
    description: "Lorem ipsum of the running test",
    link: "/moments/11",
    image: "/praia-1.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "12",
    description: "Lorem ipsum of the running test",
    link: "/moments/12",
    image: "/praia-2.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "13",
    description: "Lorem ipsum of the running test",
    link: "/moments/13",
    image: "/praia4.jpg",
    style: "lg:col-span-3",
  },
];
const SectionMoments = () => {
  const t = useTranslations("Moments");

  return (
    <div className="w-full container pt-20" id="moments">
      <div>
        <h2 className="text-4xl uppercase w-full h-[200px] flex justify-center items-center">
          {t("title")}
        </h2>
      </div>

      <div className="w-full container  grid grid-cols-4 gap-x-10 gap-y-10 py-10">
        {dataGrid.map((data, index) => {
          return (
            <div
              className={`h-[300px] flex lg:block justify-center items-center bg-transparent row-span-1 col-span-4 md:col-span-2 ${data.style}`}
              key={index}
            >
              <div className="relative w-full h-full bg-transparent flex justify-center items-center">
                <div className="w-full h-full absolute">
                  <Link href={`${data.link}`}>
                    <div className="w-full h-full flex flex-col justify-end bg-white/25  hover:bg-white/50 p-5 relative z-30">
                      <h4 className="underline text-2xl truncate underline-offset-2">
                        {data.title}
                      </h4>
                      <p className="text-lg truncate" title={`${data.description}`}>{data.description}</p>
                    </div>
                    <Image
                      src={data.image}
                      alt={data.title}
                      loading="lazy"
                      fill
                      style={{ boxShadow: " 0px 0px 50px -20px black" }}
                      className="bg-cover object-cover w-[100%] hover:shadow-xl active:shadow-2xl transition-all duration-100"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionMoments;
