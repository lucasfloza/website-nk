"use client";

import ImageSlider from "../ui/ImageSlider";

const images = [
  '/surf.jpg',
  'praia-1.jpg',
  'praia-2.jpg',
  // Adicione quantas imagens quiser aqui
];

const SectionAbout = () => {
  return (
    <div className="w-full bg-slate-300 container" id="about">
      <h1>About Us</h1>

      <div className="w-full h-[80vh] flex flex-col lg:flex-row" >
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center bg-blue-100">
          <ImageSlider images={images} />
        </div>
        <div className="w-full lg:w-1/2 h-full truncate bg-blue-300 p-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          bibendum ex vel est aliquet eleifend. Nam suscipit lacus ut enim
          facilisis vulputate. Quisque elementum faucibus lectus, quis tincidunt
          dui varius maximus. Sed aliquam faucibus neque, quis auctor nunc
          congue nec. Fusce interdum urna quis metus bibendum vestibulum. Donec
          at leo sed purus dictum maximus. Duis at orci dolor. Ut id facilisis
          est, at aliquet purus. Quisque nulla neque, molestie et hendrerit a,
          luctus sit amet justo. Ut hendrerit risus ac hendrerit vulputate. Sed
          consectetur ex vitae nibh efficitur blandit. Vestibulum quis est
          blandit, scelerisque justo in, lacinia augue. Nam vehicula, tellus
          quis sollicitudin laoreet, risus risus condimentum nisl, vel pretium
          eros libero nec purus. Donec sed enim dignissim, rutrum augue sed,
          rhoncus leo. Aliquam sit amet auctor felis. Vestibulum pharetra
          egestas nisi eget tincidunt. In viverra volutpat nulla lobortis
          tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Nulla justo enim, scelerisque at feugiat non, malesuada in lectus.
          Donec sit amet sagittis velit, et euismod lorem. Nam eget sagittis mi.
          Mauris non hendrerit ipsum, vitae cursus felis. Sed euismod eu lacus
          suscipit sollicitudin. Aliquam interdum nisi eu diam feugiat, ac
          volutpat ipsum facilisis. Duis aliquet tempor justo, a vehicula risus
          condimentum non. Curabitur massa ante, mollis in dolor vel,
          pellentesque pharetra lacus. Fusce aliquet consectetur tellus, sed
          molestie tortor varius sit amet.
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
