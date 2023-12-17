import { useState } from "react";
import Image from "next/image";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full flex flex-row justify-center relative">
        <div className="w-[15%] flex justify-center items-center">
          <button onClick={prevImage} className="px-3 py-1 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:w-7 hover:h-7 active:h-6 transition-all duration-75"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="w-[70%] h-full relative">
          <div className="w-full h-full min-h-[300px]">
            <Image
              src={images[currentIndex]}
              alt=""
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 ease-in"
            />
          </div>
        </div>
        <div className="w-[15%] flex justify-center items-center">
          <button onClick={nextImage} className="px-3 py-1 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:w-7 hover:h-7 active:h-6 transition-all duration-75"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                className="drop-shadow-lg"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default ImageSlider;
