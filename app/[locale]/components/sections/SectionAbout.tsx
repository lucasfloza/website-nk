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

      <div className="w-full h-auto lg:h-[80vh] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
          <div className="w-full lg:max-w-[500px] bg-cover h-[400px] lg:h-full lg:py-[8vh] ">
            <ImageSlider images={images} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full bg-[rgba(235,234,234,0.44)] rounded-[10px] p-10 text-center flex justify-center items-center">
          <p>
            {t("text")}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            bibendum ex vel est aliquet eleifend. Nam suscipit lacus ut enim
            facilisis vulputate. Quisque elementum faucibus lectus, quis
            tincidunt dui varius maximus. Sed aliquam faucibus neque, quis
            auctor nunc congue nec. Fusce interdum urna quis metus bibendum
            vestibulum. Donec at leo sed purus dictum maximus. Duis at orci
            dolor. Ut id facilisis est, at aliquet purus. Quisque nulla neque,
            molestie et hendrerit a, luctus sit amet justo. Ut hendrerit risus
            ac hendrerit vulputate. Sed consectetur ex vitae nibh efficitur
            blandit. Vestibulum quis est blandit, scelerisque justo in, lacinia
            augue. Nam vehicula, tellus quis sollicitudin laoreet, risus risus
            condimentum nisl, vel pretium eros libero nec purus. Donec sed enim
            dignissim, rutrum augue sed, rhoncus leo. Aliquam sit amet auctor
            felis. Vestibulum pharetra egestas nisi eget tincidunt. In viverra
            volutpat nulla lobortis tempus. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Nulla justo enim, scelerisque at feugiat
            non, malesuada in lectus. Donec sit amet sagittis velit, et euismod
            lorem. Nam eget sagittis mi. Mauris non hendrerit ipsum, vitae
            cursus felis. Sed euismod eu lacus suscipit sollicitudin. Aliquam
            interdum nisi eu diam feugiat, ac volutpat ipsum facilisis. Duis
            aliquet tempor justo, a vehicula risus condimentum non. Curabitur
            massa ante, mollis in dolor vel, pellentesque pharetra lacus. Fusce
            aliquet consectetur tellus, sed molestie tortor varius sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
