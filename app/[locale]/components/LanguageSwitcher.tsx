// "use client";

import * as React from "react";

import { useEffect, useRef, useState } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
import { usePathname, useRouter } from "./navigation";

import Image from "next/image";
// import { Button } from "./ui/button";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="right-[70px] lg:right-[0px] bottom-3 relative">
      <div className='menu-container' ref={menuRef}>
        <div className='' onClick={()=>{setOpen(!open)}}>
          <Languages className="absolute  h-[25px] w-[25px] overflow-hidden cursor-pointer" />
        </div>

        <div className={`dropdown-menu absolute top-[50px] right-[-40px] bg-white rounded-md py-[10px] px-[20px] w-[200px] duration-500 transition-all ${open? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-[20px]'}`} >
          <ul className="list-none">
            <DropdownItem img = {'/unitedStatesFlag.png'} locale={'en'} text = {"English"}/>
            <DropdownItem img = {'/brazilFlag.png'} locale={'pt'} text = {"Português"}/>
          </ul>
        </div>
      </div>
    </div>
  );

  function DropdownItem(props: any){
    return(
      <li className = 'flex my-2 py-2 first-of-type:border-b first-of-type:border-slate-200'>
        <img src={props.img} alt='' className="w-[30px] h-[20px] mr-2 opacity-50 duration-500 transition-all"/>
        <a 
          className="max-width-[100px] ml-2 duration-500 transition-all cursor-pointer text-[rgba(0,0,0,0.70)] hover:text-black" 
          onClick={() => {
            props.locale === 'en' ? router.push(pathname, { locale: "en" }) : router.push(pathname, { locale: "pt" })
          }}
          > 
          {props.text}
        </a>
      </li>
    );
  }
};

export default LanguageSwitcher;
