import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Image from "next/image";
import mobile from "../public/mobile.png";
import { MdExpandMore } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-center px-4 md:w-8/12 md:mx-auto py-40">
        <h1 className="text-white text-[40px] font-bold mb-2 lg:text-[64px] lg:mb-4">
          <span className="block md:hidden">The World's</span>
          <span className="block md:hidden">Premier Crypto</span>
          <span className="block md:hidden">Trading Platform</span>

          <span className="hidden md:block">The World's Premier</span>
          <span className="hidden md:block"> Crypto Trading Platform</span>
        </h1>

        <h2 className="text-[#C9CFDD] text-[28px] font-semibold mb-2 lg:mb-4 ">
          Buy Bitcoin, Ethereum, and 350+ cryptocurrencies
        </h2>
        <div className="flex justify-center">
          <div className="font-medium text-start mb-12 lg:text-xl ">
            <div className="text-white flex">
              <IoIosCheckmarkCircle className="text-[#1199fa]  text-2xl w-8 h-8 " />
              <div className="ml-2 mb-1">
                Trade with
                <span className="text-[#0a87fa] ">
                  {" "}
                  20+ fiat currencies
                </span>{" "}
                and Apple/Google pay
              </div>
            </div>
            <div className="text-white flex">
              <IoIosCheckmarkCircle className="text-[#1199fa] text-2xl w-8 h-8 " />
              <div className="ml-2 mb-1">
                Leader in
                <span className="text-[#0a87fa]">
                  {" "}
                  regulatory compliance
                </span>{" "}
                and
                <span className="text-[#0a87fa]"> security certifications</span>
              </div>
            </div>
            <div className="text-white flex">
              <IoIosCheckmarkCircle className="text-[#1199fa] text-2xl w-8 h-8  " />
              <div className="ml-2 mb-1">
                Trusted by
                <span className="text-[#0a87fa]">
                  {" "}
                  over 100 million users
                </span>{" "}
                worldwide
              </div>
            </div>
          </div>
        </div>
        <Image src={mobile} className="w-12/12 max-w-[280px]  mx-auto"></Image>
      </div>
    </>
  );
};

export default Hero;
