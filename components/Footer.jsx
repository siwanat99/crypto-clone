"use client";

import { useState } from "react";
import React from "react";
import { MdOutlineCloudDownload } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import qr from "../public/qr.png";
import Image from "next/image";

const Footer = () => {
  const [activeSection, setActiveSection] = useState(false);

  const toggleSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  return (
    <>
      <div className="bg-[#0b1426] text-white py-10 ">
        <div className="px-8 md:hidden">
          <div className="text-white text-2xl flex gap-1 ">
            <MdCurrencyExchange />
            <h2 className="text-xl font-semibold mb-10 flex">crypto.tan</h2>
          </div>
          <div className="mb-12">
            <div
              onClick={() => toggleSection("products")}
              className="flex justify-between mb-6 cursor-pointer"
            >
              <h1 className="font-semibold text-xl">Products</h1>
              <MdExpandMore className="text-xl" />
            </div>
            {activeSection === "products" && (
              <div className="bg-[#0c1b31] -mx-8 -mt-4 flex flex-col text-[#c9cfcd] cursor-pointer mb-4">
                <p className="ml-8 mb-4 mt-4 ">App</p>
                <p className="ml-8 mb-4">Visa Card</p>
                <p className="ml-8 mb-4">Exchange</p>
                <p className="ml-8 mb-4">DeFi Wallet</p>
                <p className="ml-8 mb-4">NFT</p>
              </div>
            )}
            <div
              onClick={() => toggleSection("features")}
              className="flex justify-between mb-6 cursor-pointer"
            >
              <h1 className="font-semibold text-xl">Features</h1>
              <MdExpandMore className="text-xl" />
            </div>
            {activeSection === "features" && (
              <div className="bg-[#0c1b31] -mx-8 -mt-4 flex flex-col text-[#c9cfcd] cursor-pointer mb-4">
                <p className="ml-8 mb-4 mt-4 ">Rewards+</p>
                <p className="ml-8 mb-4">Buy and Sell</p>
                <p className="ml-8 mb-4">Crypto Earn</p>
                <p className="ml-8 mb-4">Crypto.com Pay</p>
                <p className="ml-8 mb-4">Pay for Business</p>
                <p className="ml-8 mb-4">Margin Trading</p>
                <p className="ml-8 mb-4">Derivatives Trading</p>
                <p className="ml-8 mb-4">Supercharger</p>
                <p className="ml-8 mb-4">Trading Arena</p>
              </div>
            )}
            <div
              onClick={() => toggleSection("learn")}
              className="flex justify-between mb-6 cursor-pointer"
            >
              <h1 className="font-semibold text-xl">Learn</h1>
              <MdExpandMore className="text-xl" />
            </div>
            {activeSection === "learn" && (
              <div className="bg-[#0c1b31] -mx-8 -mt-4 flex flex-col text-[#c9cfcd] cursor-pointer mb-4">
                <p className="ml-8 mb-4 mt-4 ">University</p>
                <p className="ml-8 mb-4">Reseacrch & Analysis</p>
                <p className="ml-8 mb-4">Glossary</p>
                <p className="ml-8 mb-4">Bitcoin</p>
                <p className="ml-8 mb-4">What is Ethereum?</p>
                <p className="ml-8 mb-4">What is Blockchain?</p>
                <p className="ml-8 mb-4">How to buy Bitcoin?</p>
                <p className="ml-8 mb-4">How to buy Ethereum?</p>
                <p className="ml-8 mb-4">How to buy Crypto?</p>
                <p className="ml-8 mb-4">What is Crypto?</p>
                <p className="ml-8 mb-4">What is DeFi?</p>
              </div>
            )}
            <div
              onClick={() => toggleSection("prices")}
              className="flex justify-between mb-6 cursor-pointer"
            >
              <h1 className="font-semibold text-xl">Prices</h1>
              <MdExpandMore className="text-xl" />
            </div>
            {activeSection === "prices" && (
              <div className="bg-[#0c1b31] -mx-8 -mt-4 flex flex-col text-[#c9cfcd] cursor-pointer mb-4">
                <p className="ml-8 mb-4 mt-4 ">Crypto Prices</p>
                <p className="ml-8 mb-4">Bitcoin Price</p>
                <p className="ml-8 mb-4">Ethereum Price</p>
                <p className="ml-8 mb-4">BTC/USD Converter</p>
                <p className="ml-8 mb-4">Site Widgets</p>
              </div>
            )}
            <div
              onClick={() => toggleSection("news")}
              className="flex justify-between mb-6 cursor-pointer"
            >
              <h1 className="font-semibold text-xl">News</h1>
              <MdExpandMore className="text-xl" />
            </div>
            {activeSection === "news" && (
              <div className="bg-[#0c1b31] -mx-8 -mt-4 flex flex-col text-[#c9cfcd] cursor-pointer mb-4">
                <p className="ml-8 mb-4 mt-4 ">What's Trending</p>
                <p className="ml-8 mb-4">Market Updates</p>
                <p className="ml-8 mb-4">Product News</p>
                <p className="ml-8 mb-4">Company News</p>
                <p className="ml-8 mb-4">Events</p>
              </div>
            )}
            <div
              onClick={() => toggleSection("company")}
              className="flex justify-between mb-6 cursor-pointer"
            >
              <h1 className="font-semibold text-xl">Company</h1>
              <MdExpandMore className="text-xl" />
            </div>
            {activeSection === "company" && (
              <div className="bg-[#0c1b31] -mx-8 -mt-4 flex flex-col text-[#c9cfcd] cursor-pointer mb-4">
                <p className="ml-8 mb-4 mt-4 ">About Us</p>
                <p className="ml-8 mb-4">Partners</p>
                <p className="ml-8 mb-4">Security</p>
                <p className="ml-8 mb-4">Proof of Reserves</p>
                <p className="ml-8 mb-4">Climate</p>
                <p className="ml-8 mb-4">Capital</p>
                <p className="ml-8 mb-4">Affilliate</p>
                <p className="ml-8 mb-4">Careers</p>
                <p className="ml-8 mb-4">Listing</p>
                <p className="ml-8 mb-4">Support</p>
                <p className="ml-8 mb-4">Siwanong</p>
              </div>
            )}
          </div>
          <div className="flex justify-center mb-6 text-xl font-semibold">
            Get started with crypto
          </div>
          <div className="bg-[#0577da] rounded-full px-6 py-2 flex justify-center items-center gap-2 font-semibold">
            <MdOutlineCloudDownload className="text-xl" />
            Download App
          </div>
        </div>
        {/*md:screen show*/}.
        <div className="px-10 lg:px-20 hidden md:block">
          <div className="flex justify-between  ">
            <div className="text-white text-4xl flex gap-1 items-center  ">
              <MdCurrencyExchange />
              <h2 className="text-2xl font-semibold flex ">crypto.tan</h2>
            </div>
            <div className="border-s border-gray-600 flex"></div>
            <div className="flex text-2xl items-center gap-2 xl:gap-6 cursor-pointer">
              <FaTwitter />
              <FaSquareInstagram />
              <FaSquareThreads />
              <FaFacebookSquare />
              <FaDiscord />
              <FaLinkedin />
              <FaReddit />
              <FaTelegram />
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 gap-6 mt-12 px-10 lg:px-20 xl:grid-cols-5 xl:grid-rows-1 hidden ">
          <div className="">
            <div className="flex gap-3 text-[#c9cfcd] mb-8">
              <p className="border border-white"></p>
              <p className="text-lg font-semibold tracking-widest ">APP</p>
            </div>
            <div className="flex gap-3 text-[#c9cfcd] mb-8">
              <div className="border border-white"></div>
              <p className="text-lg font-semibold tracking-widest  ">
                VISA CARD
              </p>
            </div>
            <div className="flex gap-3 text-[#c9cfcd] mb-8">
              <p className="border border-white"></p>
              <p className="text-lg font-semibold tracking-widest ">EXCHANGE</p>
            </div>
            <div className="flex gap-3 text-[#c9cfcd] mb-8">
              <p className="border border-white"></p>
              <p className="text-lg font-semibold tracking-widest ">
                DEFI WALLET
              </p>
            </div>
            <div className="flex gap-3 text-[#c9cfcd] mb-8">
              <p className="border border-white"></p>
              <p className="text-lg font-semibold tracking-widest  ">NFT</p>
            </div>
            <div className="mt-16 flex flex-col items-start text-center gap-6 xl:hidden">
              <h1 className="font-semibold">Get Started with crypto</h1>
              <div className=" bg-[#0577da] rounded-full px-6 py-2 flex justify-center items-center gap-2 font-semibold cursor-pointer ">
                <MdOutlineCloudDownload className="text-xl" />
                Download App
              </div>
              <Image
                src={qr}
                className=" w-[185px] border border-[#0a4573] p-4 rounded-2xl bg-[#06162a] "
              ></Image>
            </div>
          </div>
          {/* download box for xl */}
          <div className="   items-start text-center xl:col-start-7 hidden xl:flex xl:flex-col xl:gap-6">
            <h1 className="">Get Started with crypto</h1>
            <div className="bg-[#0577da] rounded-full px-6 py-2 flex justify-center items-center gap-2 font-semibold cursor-pointer">
              <MdOutlineCloudDownload className="text-xl" />
              Download App
            </div>
            <Image
              src={qr}
              className=" w-[185px] border border-[#0a4573] p-4 rounded-2xl bg-[#06162a] "
            ></Image>
          </div>

          <div className="">
            <div className="md:block xl:hidden">
              <h1 className="font-semibold">Feautures</h1>
              <p className=" mb-2 text-gray-400 font-semibold mt-4 ">
                Rewards+
              </p>
              <p className=" mb-2 text-sm text-gray-400 font-semibold">
                Buy and Sell
              </p>
              <p className=" mb-2 text-sm text-gray-400 font-semibold">
                Crypto Earn
              </p>
              <p className=" mb-2 text-sm text-gray-400 font-semibold">
                Crypto.com Pay
              </p>
              <p className=" mb-2 text-sm text-gray-400 font-semibold">
                Pay for Business
              </p>
              <p className=" mb-2 text-sm text-gray-400 font-semibold">
                Margin Trading
              </p>
              <p className=" mb-2 text-sm text-gray-400 font-semibold">
                Derivatives Trading
              </p>
              <p className=" mb-2 text-sm text-gray-400 font-semibold">
                Supercharger
              </p>
              <p className=" mb-2 text-sm text-gray-400 font-semibold">
                Trading Arena
              </p>
            </div>
            <div className="mt-6 md:block xl:hidden">
              <h1 className="font-semibold">Prices</h1>
              <p className="mb-2 text-sm text-gray-400 font-semibold mt-4 ">
                Crypto Prices
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Bitcoin Price
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Ethereum Price
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                BTC/USD Converter
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Site Widgets
              </p>
            </div>
            <div className="mt-6 col-span-1 md:block xl:hidden">
              <h1 className="font-semibold">News</h1>
              <p className="mb-2 text-sm text-gray-400 font-semibold mt-4 ">
                What's Trending
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Market Updates
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Product News
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Company News
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">Events</p>
            </div>
          </div>

          {/* features box for xl */}
          <div className="col-start-2 row-start-1 hidden xl:block ">
            <h1 className="font-semibold">Feautures</h1>
            <p className=" mb-2 text-gray-400 font-semibold mt-4 ">Rewards+</p>
            <p className=" mb-2 text-sm text-gray-400 font-semibold">
              Buy and Sell
            </p>
            <p className=" mb-2 text-sm text-gray-400 font-semibold">
              Crypto Earn
            </p>
            <p className=" mb-2 text-sm text-gray-400 font-semibold">
              Crypto.com Pay
            </p>
            <p className=" mb-2 text-sm text-gray-400 font-semibold">
              Pay for Business
            </p>
            <p className=" mb-2 text-sm text-gray-400 font-semibold">
              Margin Trading
            </p>
            <p className=" mb-2 text-sm text-gray-400 font-semibold">
              Derivatives Trading
            </p>
            <p className=" mb-2 text-sm text-gray-400 font-semibold">
              Supercharger
            </p>
            <p className=" mb-2 text-sm text-gray-400 font-semibold">
              Trading Arena
            </p>
          </div>

          {/* prices box for xl */}
          <div className="col-start-5 row-start-1 hidden xl:block">
            <div className="">
              <h1 className="font-semibold">Prices</h1>
              <p className="mb-2 text-sm text-gray-400 font-semibold mt-4 ">
                Crypto Prices
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Bitcoin Price
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Ethereum Price
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                BTC/USD Converter
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Site Widgets
              </p>
            </div>
            <div className="mt-6">
              <h1 className="font-semibold">News</h1>
              <p className="mb-2 text-sm text-gray-400 font-semibold mt-4 ">
                What's Trending
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Market Updates
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Product News
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Company News
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">Events</p>
            </div>
          </div>

          <div className="">
            <div className="md:block xl:hidden ">
              <h1 className="font-semibold">Learn</h1>
              <p className="mb-2 text-sm text-gray-400 font-semibold mt-4 ">
                University
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Reseacrch & Analysis
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Glossary
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Bitcoin
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                What is Ethereum?
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                What is Blockchain?
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                How to buy Bitcoin?
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                How to buy Ethereum?
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                How to buy Crypto?
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                What is Crypto?
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                What is DeFi?
              </p>
            </div>
            <div className="mt-4 col-span-1 md:block xl:hidden">
              <h1 className="font-semibold">Company</h1>
              <p className="mb-2 text-sm text-gray-400 font-semibold mt-4 ">
                About Us
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Partners
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Security
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Proof of Reserves
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Climate
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Capital
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Affilliate
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Careers
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Listing
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Support
              </p>
              <p className="mb-2 text-sm text-gray-400 font-semibold">
                Siwanong
              </p>
            </div>
          </div>

          {/* learn box for xl */}
          <div className="col-start-3 row-start-1 hidden xl:block">
            <h1 className="font-semibold">Learn</h1>
            <p className="mb-2 text-sm text-gray-400 font-semibold mt-4 ">
              University
            </p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">
              Reseacrch & Analysis
            </p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">Glossary</p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">Bitcoin</p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">
              What is Ethereum?
            </p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">
              What is Blockchain?
            </p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">
              How to buy Bitcoin?
            </p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">
              How to buy Ethereum?
            </p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">
              How to buy Crypto?
            </p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">
              What is Crypto?
            </p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">
              What is DeFi?
            </p>
          </div>

          {/* company box for xl */}
          <div className="col-start-4 row-start-1 hidden xl:block">
            <h1 className="font-semibold">Company</h1>
            <p className="mb-2 text-sm text-gray-400 font-semibold mt-4 ">
              About Us
            </p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">Partners</p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">Security</p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">
              Proof of Reserves
            </p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">Climate</p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">Capital</p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">
              Affilliate
            </p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">Careers</p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">Listing</p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">Support</p>
            <p className="mb-2 text-sm text-gray-400 font-semibold">Siwanong</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
