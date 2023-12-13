"use client";

import Link from "next/link";

let dataGrid = [
  {
    title: "01",
    description:"Lorem ipsum of the running test",
    link: "moments/01",
    image: "/praia-1.jpg",
    style: "lg:col-span-3",
  },
  {
    title: "02",
    description:"Lorem ipsum of the running test",
    link: "/moments/02",
    image: "/praia-2.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "03",
    description:"Lorem ipsum of the running test",
    link: "/moments/03",
    image: "/praia4.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "04",
    description:"Lorem ipsum of the running test",
    link: "/moments/04",
    image: "/praia.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "05",
    description:"Lorem ipsum of the running test",
    link: "/moments/05",
    image: "/veraneio-2.jpg",
    style: "lg:col-span-2",
  },
  {
    title: "06",
    description:"Lorem ipsum of the running test",
    link: "/moments/06",
    image: "/praia-1.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "07",
    description:"Lorem ipsum of the running test",
    link: "/moments/07",
    image: "/praia-2.jpg",
    style: "lg:col-span-2",
  },
  {
    title: "08",
    description:"Lorem ipsum of the running test",
    link: "/moments/08",
    image: "/praia4.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "09",
    description:"Lorem ipsum of the running test",
    link: "/moments/09",
    image: "/praia.jpg",
    style: "lg:col-span-2",
  },
  {
    title: "10",
    description:"Lorem ipsum of the running test",
    link: "/moments/10",
    image: "/veraneio-2.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "11",
    description:"Lorem ipsum of the running test",
    link: "/moments/11",
    image: "/praia-1.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "12",
    description:"Lorem ipsum of the running test",
    link: "/moments/12",
    image: "/praia-2.jpg",
    style: "lg:col-span-1",
  },
  {
    title: "13",
    description:"Lorem ipsum of the running test",
    link: "/moments/13",
    image: "/praia4.jpg",
    style: "lg:col-span-3",
  },
];
const SectionMoments = () => {
  return (
    <div className="w-full">
      <div
        className="w-full h-[200px] bg-white relative -top-10 shadow-forcast"
        id="moments"
      />
      <div className="relative -top-10">
        <h2 className="text-4xl uppercase w-full h-[200px] flex justify-center items-center">
          Moments
        </h2>
        {/* grid */}
        <div className="w-full container parent grid grid-cols-4 gap-x-10 gap-y-10 py-10">
          {dataGrid.map((dado, index) => {
            return (
              <div
                className={`h-[300px] row-span-1 col-span-4 md:col-span-2 ${dado.style}`}
                key={index}
              >
                <div className="w-[95%] h-[95%] bg-[#000000cb] relative top-[7px] left-[7px]" />

                <Link href={`${dado.link}`}>
                  <div
                    className="w-[95%] h-[95%] bg-cover bg-center cursor-pointer relative bottom-[95%] hover:bottom-[94%] hover:left-[3.5px]  active:bottom-[94%] active:left-[7px] transition-all duration-200"
                    style={{ backgroundImage: `url(${dado.image})` }}
                  >
                    <div className="w-full h-full flex flex-col justify-end bg-white/25  hover:bg-white/50 p-5">
                      <h4 className="hover:underline text-2xl truncate underline-offset-2">{dado.title}</h4>
                      <p className="text-lg truncate">{dado.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionMoments;
