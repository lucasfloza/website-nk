"use client";

// next link
import Link from "next/link";

// next image
import Image from "next/image";

import React, { useEffect, useState } from "react";

//icons
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

import LanguageSwitcher from "./LanguageSwitcher";

interface Props {}

let itens_menu = [
  { id: 1, name: "About Us", url: "#about" },
  { id: 2, name: "Shop", url: "#shop" },
  { id: 3, name: "Moments", url: "#moments" },
  { id: 4, name: "Contact", url: "#contact" },
];

const Header: React.FC<Props> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [header, setHeader] = useState(false);
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // header
      if (window.scrollY > 20) {
        setLogo(true);
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-white shadow-md " : "bg-transparent shadow-none "
      } transition-all duration-300 fixed w-full h-24 shadow-xl z-30`}
    >
      <div className="flex justify-between items-center h-full w-full container mx-auto px-4 2xl:px-16">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            priority
            className=""
          />
        </Link>
        <div className="">
          <ul
            className={`hidden lg:flex ${
              header ? "text-black" : "text-white"
            } `}
          >
            {itens_menu.map((item) => (
              <li
                className="ml-10 uppercase hover:underline underline-offset-2 text-xl"
                key={item.id}
              >
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`flex justify-center items-center pr-10 ${
              header ? "text-black" : "text-white"
            }`}>
          <LanguageSwitcher  />

          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden cursor-pointer  "
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>

        {/* mobile navbar */}
        <div
          className={`fixed top-0 p-10 ease-in bg-white duration-500 h-full
                ${
                  menuOpen
                    ? "left-0 w-[65%] lg:hidden h-screen"
                    : "left-[-100%]"
                }`}
        >
          <div className="flex w-full items-center justify-end">
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer"
            >
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="flex-col py-4">
            <ul className="">
              {itens_menu.map((item) => (
                <li
                  className="py-4 hover:border-b cursor-pointer"
                  key={item.id}
                >
                  <Link href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row justify-around pt-10 pb-5 items-center">
            <AiOutlineInstagram size={30} className="cursor-pointer" />
            <AiOutlineFacebook size={30} className="cursor-pointer" />
            <AiOutlineTwitter size={30} className="cursor-pointer" />
          </div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={200}
              priority
              className="cursor-pointer mx-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
