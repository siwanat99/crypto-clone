import React from "react";
import Image from "next/image";
import cryptologo from "../public/cryptologo.webp";
import { FaArrowRight } from "react-icons/fa";

const Vision = () => {
  return (
    <>
      <div className="bg-[#061121] py-20">
        <div className="text-white flex flex-col items-center w-11/12 mx-auto">
          <h1 className="text-[#02dafe] font-bold text-2xl mb-2 xl:text-3xl">
            OUR VISION
          </h1>
          <h1 className="text-[32px] font-semibold text-center xl:text-[48px]">
            Cryptocurrency in Every Wallet
          </h1>
          <Image
            src={cryptologo}
            className="mb-4 max-w-[330px] xl:max-w-[660px]"
          ></Image>
          <div className="flex justify-center items-center w-9/12 mx-auto gap-10 md:gap-20 mb-8">
            <div className="flex flex-col items-center">
              <p className="font-semibold text-lg xl:text-3xl">Founded in</p>
              <p className="text-[#02dafe] font-bold text-2xl xl:text-4xl">
                2016
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-lg xl:text-3xl">Users</p>
              <p className="text-[#02dafe] font-bold text-2xl xl:text-4xl">
                100M
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center text-white border border-white px-10 py-4 rounded-full gap-4 font-bold hover:bg-gray-900  cursor-pointer xl:text-2xl ">
            About Us <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
