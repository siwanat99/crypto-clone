import React from "react";
import Image from "next/image";
import mobilebtc from "../public/mobilebtc.png";
import eth from "../public/eth.png";
import btc from "../public/btc.webp";
import cro from "../public/cro.webp";
import pol from "../public/pol.webp";
import doge from "../public/doge.webp";
import phone from "../public/phone.webp";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { RiBtcLine } from "react-icons/ri";

const Journey = () => {
  return (
    <>
      <div className="bg-[#000b22] text-white px-4 py-10 animate-appear">
        <div className="">
          <div className="text-[32px] lg:text-[42px] font-semibold flex justify-center text-center mb-10 mt-20">
            Your Crypto journey starts here
          </div>
          <div className="md:grid md:grid-cols-2 gap-4 max-w-11/12 mx-auto max-w-[750px]">
            <div className="">
              <div className="bg-[#023668] rounded-xl flex  justify-between p-6 mb-4 ">
                <div className="text-[22px] font-semibold">
                  <div className="text-[#1199fa] mb-2">Buy crypto </div>
                  <div className="max-w-40">
                    Buy BTC , ETH , and other crypto easily with
                  </div>
                </div>
                <Image src={mobilebtc} className="w-[130px] "></Image>
              </div>
              <div className="bg-[#023668] rounded-xl p-6 mb-4 col-start-1 row-start-2">
                <div className="text-[20px] font-semibold mb-6">
                  <div className="text-[#1199fa] mb-2">Price Alerts </div>
                  Be notified on BTC, ETH, XRP prices, and more.
                </div>
                <div className="">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2 font-semibold">
                      <Image src={btc} className="w-7"></Image>
                      <div className="">
                        <h1 className="">Bitcoin</h1>
                        <p className="text-sm text-[#919092]">BTC</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <h1 className="font-semibold">$68,317.74</h1>
                      <p className="text-[#20b29d] font-semibold">+1.47%</p>
                    </div>
                  </div>
                  <div className="border-b border border-[#8c8c8f]"></div>
                  <div className="flex justify-between mb-2 mt-2">
                    <div className="flex items-center gap-2 font-semibold">
                      <Image src={eth} className="w-7"></Image>
                      <div className="">
                        <h1 className="">Ethereum</h1>
                        <p className="text-sm text-[#919092]">ETH</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <h1 className="font-semibold">$3,280.56</h1>
                      <p className="text-[#20b29d] font-semibold">+0.94%</p>
                    </div>
                  </div>
                  <div className="border-b border border-[#8c8c8f]"></div>
                  <div className="flex justify-between mb-2 mt-2">
                    <div className="flex items-center gap-2 font-semibold">
                      <Image src={doge} className="w-7"></Image>
                      <div className="">
                        <h1 className="">Dogecoin</h1>
                        <p className="text-sm text-[#919092]">DOGE</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <h1 className="font-semibold">$0.135394</h1>
                      <p className="text-[#20b29d] font-semibold">+4.55%</p>
                    </div>
                  </div>
                  <div className="border-b border border-[#8c8c8f]"></div>
                  <div className="flex justify-between mb-2 mt-2">
                    <div className="flex items-center gap-2 font-semibold">
                      <Image src={pol} className="w-7"></Image>
                      <div className="">
                        <h1 className="">Polkadot</h1>
                        <p className="text-sm text-[#919092]">DOT</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <h1 className="font-semibold">$5.87</h1>
                      <p className="text-[#20b29d] font-semibold">+0.00</p>
                    </div>
                  </div>
                  <div className="border-b border border-[#8c8c8f]"></div>
                  <div className="flex justify-between mb-2 mt-2">
                    <div className="flex items-center gap-2 font-semibold">
                      <Image src={cro} className="w-7"></Image>
                      <div className="">
                        <h1 className="">Cronos</h1>
                        <p className="text-sm text-[#919092]">CRO</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <h1 className="font-semibold">$0.0091731</h1>
                      <p className="text-[#20b29d] font-semibold">+0.77%</p>
                    </div>
                  </div>
                  <div className="border-b border border-[#8c8c8f]"></div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#023668] rounded-xl flex flex-col px-6 pt-6 mb-6">
                <div className="text-[22px] font-semibold mb-8">
                  <div className="text-[#1199fa] mb-2">Recurring Buy </div>
                  <div className="">
                    Grow your portfolio automatically with daily, weekly, or
                    monthly trades.
                  </div>
                </div>
                <Image src={phone} className="max-w-[300px] mx-auto"></Image>
              </div>
              <div className="bg-white rounded-xl text-black flex flex-col items-center">
                <h1 className="font-bold text-[18px] flex">
                  Join our
                  <span className="text-[#1199fa]"> &nbsp; 100+ users </span>
                </h1>
                <p className="font-bold text-[26px]">Get started</p>
                <p className="font-bold text-[26px]">today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
