import { useState } from "react";
import { motion } from "framer-motion";

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
      <div className="w-full h-full lg:w-[300px] lg:h-[600px] bg-slate-700 flex justify-center">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full bg-contain "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      {/* <div className="absolute left-1/4 flex items-center">
          <button
            onClick={prevImage}
            className="bg-gray-800 text-white px-3 py-1 mr-2 rounded-full focus:outline-none"
          >
            Prev
          </button>
        </div>
        <div className="relative right-1/2 flex items-center">
          <button
            onClick={nextImage}
            className="bg-gray-800 text-white px-3 py-1 ml-2 rounded-full focus:outline-none"
          >
            Next
          </button>
        </div> */}
    </div>
  );
};

export default ImageSlider;
