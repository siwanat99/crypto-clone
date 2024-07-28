import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import morephone from "../public/morephone.webp";

const Card = () => {
  return (
    <>
      <div className="bg-white px-2 py-20">
        <div className="w-10/12 mx-auto md:grid grid-cols-2">
          <div className="flex flex-col items-center gap-1 md:items-start md:justify-center">
            <h1 className="text-[#0058aa] text-lg font-bold mb-2 xl:text-2xl">
              CRYPTO.COM DEFI
            </h1>
            <h1 className="font-bold text-3xl mb-4 xl:text-5xl">
              DeFi Made Simple
            </h1>
            <div className="mb-4 leading-8 xl:leading-10 xl:text-xl">
              <p className="font-semibold">
                DeFi Wallet.{" "}
                <span className="text-[#7d7d7d]">Your Keys, Your Crypto</span>
              </p>
              <p className="font-semibold">
                DeFi Earn.{" "}
                <span className="text-[#7d7d7d]">
                  No lock-up period and stable returns.
                </span>
              </p>
              <p className="font-semibold">
                DeFi Swap.{" "}
                <span className="text-[#7d7d7d]">
                  Swap DeFi coins and earn Triple Yield.
                </span>
              </p>
            </div>
            <div className="flex gap-2">
              <div className="xl:flex hidden border border-blue-500 font-semibold p-4 px-8 rounded-full items-center text-blue-500 mb-10 cursor-pointer">
                Get DeFi Waller <FaArrowRight className="ml-2" />
              </div>
              <div className="bg-[#0e213b] font-semibold p-4 px-8 rounded-full flex items-center text-white mb-10 cursor-pointer ">
                Explore DeFi Features <FaArrowRight className="ml-2" />
              </div>
            </div>
          </div>
          <div className="w-12/12 mx-auto flex justify-center">
            <Image
              src={morephone}
              className="max-w-[280px] xl:max-w-[500px]"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
