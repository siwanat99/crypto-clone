import React from "react";
import { BsGraphUp } from "react-icons/bs";

const PriceSection = () => {
  return (
    <>
      <div className="bg-[#010118] flex flex-col justify-center py-12 pb-20">
        <div className="text-white flex flex-col items-center text-center w-10/12 mx-auto">
          <div className="text-[#1199fa] font-bold mb-1 lg:text-xl">
            CRYPTO.COM PRICE
          </div>
          <h1 className="text-[40px] font-semibold leading-[50px] mb-6 md:w-2/3">
            Buy Bitcoin, Ethereum, and 350+ cryptocurrencies
          </h1>
          <div
            className="cursor-pointer px-6 py-3 border flex items-center gap-4 text-[18px] font-semibold border-white rounded-full bg-[#010118] mb-14
  
              hover:bg-white  hover:border-2 hover:border-blue-800 hover:text-black transition-all duration-500"
          >
            Check Crypto Prices <BsGraphUp />
          </div>
        </div>
        <div className="text-white w-10/12 mx-auto">
          <div className="flex justify-between mb-2 mt-2 md:grid md:grid-cols-3 ">
            <div className="md:flex md:items-center md:gap-2">
              <h1 className="font-semibold">Bitcoin</h1>
              <p className="text-[#7d7a78]">BTC</p>
            </div>
            <div className="flex flex-col items-end md:flex-row md:items-center md:justify-between md:gap-6">
              <h1 className="text-[22px] font-semibold">$67,648.42</h1>
              <p className="text-[#20b29d] font-semibold">+5.81%</p>
            </div>
            <div className="hidden md:flex justify-end">
              <div
                className="hidden md:flex items-center justify-center my-auto bg-white rounded-full px-10 h-[40px] text-black font-bold cursor-pointer
              hover:bg-black hover:border hover:border-blue-500 hover:text-white transition-all duration-500"
              >
                Trade
              </div>
            </div>
          </div>
          <div className="border-b border border-[#4b4b5b]"></div>
          <div className="flex justify-between mb-2 mt-2 md:grid md:grid-cols-3">
            <div className="md:flex md:items-center md:gap-2">
              <h1 className="font-semibold">Ethereum</h1>
              <p className="text-[#7d7a78]">ETH</p>
            </div>
            <div className="flex flex-col items-end md:flex-row md:items-center md:justify-between md:gap-6">
              <h1 className="text-[22px] font-semibold">$3,256.12</h1>
              <p className="text-[#20b29d] font-semibold">+3.77%</p>
            </div>
            <div className="hidden md:flex justify-end">
              <div
                className="hidden md:flex items-center justify-center my-auto bg-white rounded-full px-10 h-[40px] text-black font-bold
              cursor-pointer
              hover:bg-black hover:border hover:border-blue-500 hover:text-white transition-all duration-500"
              >
                Trade
              </div>
            </div>
          </div>
          <div className="border-b border border-[#4b4b5b]"></div>
          <div className="flex justify-between mb-2 mt-2 md:grid md:grid-cols-3">
            <div className="md:flex md:items-center md:gap-2">
              <h1 className="font-semibold">Cardano</h1>
              <p className="text-[#7d7a78]">ADA</p>
            </div>
            <div className="flex flex-col items-end md:flex-row md:items-center md:justify-between md:gap-6">
              <h1 className="text-[22px] font-semibold">$0.413015</h1>
              <p className="text-[#20b29d] font-semibold">+5.59%</p>
            </div>
            <div className="hidden md:flex justify-end">
              <div
                className="hidden md:flex items-center justify-center my-auto bg-white rounded-full px-10 h-[40px] text-black font-bold
              cursor-pointer
              hover:bg-black hover:border hover:border-blue-500 hover:text-white transition-all duration-500"
              >
                Trade
              </div>
            </div>
          </div>
          <div className="border-b border border-[#4b4b5b]"></div>
          <div className="flex justify-between mb-2 mt-2 md:grid md:grid-cols-3">
            <div className="md:flex md:items-center md:gap-2">
              <h1 className="font-semibold">Dogecoin</h1>
              <p className="text-[#7d7a78]">DOGE</p>
            </div>
            <div className="flex flex-col items-end md:flex-row md:items-center md:justify-between md:gap-6">
              <h1 className="text-[22px] font-semibold">$0.130440</h1>
              <p className="text-[#20b29d] font-semibold">+5.65%</p>
            </div>
            <div className="hidden md:flex justify-end">
              <div
                className="hidden md:flex items-center justify-center my-auto bg-white rounded-full px-10 h-[40px] text-black font-bold
              cursor-pointer
              hover:bg-black hover:border hover:border-blue-500 hover:text-white transition-all duration-500"
              >
                Trade
              </div>
            </div>
          </div>
          <div className="border-b border border-[#4b4b5b]"></div>
          <div className="flex justify-between mb-2 mt-2 md:grid md:grid-cols-3">
            <div className="md:flex md:items-center md:gap-2">
              <h1 className="font-semibold">Polkado</h1>
              <p className="text-[#7d7a78]">DOT</p>
            </div>
            <div className="flex flex-col items-end md:flex-row md:items-center md:justify-between md:gap-6">
              <h1 className="text-[22px] font-semibold">$5.83</h1>
              <p className="text-[#20b29d] font-semibold">+2.44%</p>
            </div>
            <div className="hidden md:flex justify-end">
              <div
                className="hidden md:flex items-center justify-center my-auto bg-white rounded-full px-10 h-[40px] text-black font-bold
              cursor-pointer
              hover:bg-black hover:border hover:border-blue-500 hover:text-white transition-all duration-500"
              >
                Trade
              </div>
            </div>
          </div>
          <div className="border-b border border-[#4b4b5b]"></div>
        </div>
      </div>
    </>
  );
};

export default PriceSection;
