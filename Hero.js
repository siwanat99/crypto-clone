import { Span } from "next/dist/trace";
import React from "react";
import Image from "next/image";
import tan from "../public/tan.png";
import vr from "../public/vr.png";

const Hero = () => {
  return (
    <>
      <div className="md:w-10/12 mx-auto relative">
        <div className=" text-white px-10 flex flex-col h-full justify-center items-center md:grid md:grid-cols-2">
          <div className="flex flex-col items-center text-center md:items-start md:text-start">
            <h1 className="text-3xl font-bold mb-3 lg:text-4xl">
              I'm Siwanong Quack
            </h1>
            <h2 className="text-2xl font-bold text-customLightblue2 mb-3 lg:text-3xl">
              Frontend Developer
            </h2>
            <p className="mb-7 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              exercitationem doloribus repellat consequuntur possimus
              dignissimos aperiam soluta quae, culpa reprehenderit in
              perspiciatis.
            </p>
            <div className="flex flex-col w-full items-center md:items-start lg:flex-row lg:gap-6">
              <button
                className=" px-4 py-2 bg-customLightblue2 cursor-pointer transition-all duration-500 relative outline-none w-1/2 rounded-lg mb-2 hover:border-customLightblue2 hover:border hover:font-bold
          after:content-[''] after:absolute after:left-0 after:top-0 after:w-0 after:h-full after:bg-customBlue  after:transition-all after:duration-500 after: z-0 hover:after:w-full after:z-0 after:rounded-lg
          lg:w-2/5  "
              >
                <p className="text-white relative z-20">Hire Me</p>
              </button>
              <button
                className="border border-customLightblue2  py-2 rounded-lg text-customLightblue2 w-1/2 cursor-pointer transition-all duration-500 relative outline-non hover:font-bold
         after:content-[''] after:absolute after:right-0 after:top-0 after:w-0 after:h-full after:bg-customLightblue2  after:transition-all after:duration-500 after: z-0 hover:after:w-full after:z-0 after:rounded-lg
            lg:w-2/5 "
              >
                <p className="text-white relative z-20">Let's Talk</p>
              </button>
            </div>
          </div>
          <div className="flex md:h-full  justify-center  ">
            <Image
              src={vr}
              className="md:absolute md:-top-[130px] md:ml-20 md:h-full h-2/3  opacity-50 "
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
