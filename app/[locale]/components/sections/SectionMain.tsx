'use client'

import Image from "next/image"
import { FrameBoto } from "../FrameButton"

const SectionMain = () => {
    return (
    <div className="w-full mx-auto bg-red-300 font-normal">
        <div className="w-full mx-auto bg-[url('/praia.jpg')] bg-cover pt-24 pb-[25vh]">

            <div className="w-full h-full container bg-[rgba(255,255,255,0.12)]  flex flex-col lg:flex-row gap-4 p-5 pb-5">
                {/* logo */}
                <div className="w-full h-full lg:w-1/2 lg:h-full justify-center items-center hidden lg:flex">
                    <img src="/logo.png" className="w-4/5 drop-shadow-md"/>
                </div>

                {/* text and button */}
                <div className="text-white w-full h-full lg:w-1/2 lg:h-full flex flex-col items-center pt-[80px] pb-[150px] lg:pt-[120px] px-10">
                    <h1 className="text-4xl lg:text-5xl mb-20">Welcome North Kush</h1>
                    <p className=" mb-10 px-4 lg:px-14">We are explorers of life, urban art enthusiasts, SP culture surfers and collectors of moments — welcome to "North Kush",
                        where the passion for travel mixes with the appreciation for cannabis culture in a universe of unique experiences.</p>

                    <FrameBoto />
                </div>
            </div>
        </div>
    </div>
    )

}

export default SectionMain