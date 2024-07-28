"use client";

import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { useState } from "react";
import Navbar from "./Navbar";

const SlideMenu = () => {
  const [slideUpdate, setSlideUpdate] = useState(false);

  const toggleSlide = () => {
    setSlideUpdate(!slideUpdate);
  };

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const toggleExchange = () => {
    setShowExchange(!showExchange);
  };
  const toggleDefi = () => {
    setShowDefi(!showDefi);
  };
  const toggleEco = () => {
    setShowEco(!showEco);
  };
  const toggleCompany = () => {
    setShowCompany(!showCompany);
  };
  const toggleLearn = () => {
    setShowLearn(!showLearn);
  };

  return (
    <>
      <Navbar toggleSlide={toggleSlide} />
      <div
        className={`bg-white w-full fixed border h-full top-0 left-0 ${
          slideUpdate ? "animate-slideRight" : "animate-slideLeft"
        }`}
      >
        <div className="flex justify-between items-center font-bold text-lg py-4 px-6">
          <div className="flex items-center gap-2">
            <AiOutlineGlobal className="text-blue-500 text-2xl" />
            <p className="">GLOBAL | EN</p>
          </div>
          <div
            onClick={toggleSlide}
            className="transition-all duration-400 hover:-rotate-90 cursor-pointer"
          >
            <IoCloseSharp className="text-3xl" />
          </div>
        </div>
        <div className="border-gray-400 border-b mt-2 "></div>
        <div
          onClick={() => toggleSection("detail")}
          className="flex justify-between py-4 px-6 items-center text-lg font-semibold cursor-pointer"
        >
          <h1 className="">Crypto.com App</h1>
          {activeSection === "detail" ? (
            <MdExpandMore className="rotate-180" />
          ) : (
            <MdExpandMore />
          )}
        </div>

        {activeSection === "detail" && (
          <div className="bg-[#f7f9fa] py-3 px-6 flex flex-col space-y-3 animate-slideMenu ">
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">Buy and Sell</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Buy Bitcoin, Ethereum, and 350+ cryptocurrencies
                </p>
              </div>
            </div>
            <div className="border-b border border-white mb-1 mt-1"></div>
            <div className="flex items-stretch">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4">
                <h1 className="text-lg font-semibold">Metal Visa Cards</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Up to 5% back on all spending
                </p>
              </div>
            </div>
            <div className="border-b border border-white mb-1 mt-1"></div>
            <div className="flex items-stretch">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4">
                <h1 className="text-lg font-semibold">Crypto.com Pay</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Spend your crypto anywhere
                </p>
              </div>
            </div>
            <div className="border-b border border-white mb-1 mt-1"></div>
            <div className="flex">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4">
                <h1 className="text-lg font-semibold">Rewards+</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Make every trade more rewarding
                </p>
              </div>
            </div>
            <div className="border-b border border-white mb-1 mt-1"></div>
            <div className="flex">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4">
                <h1 className="text-lg font-semibold">Crypto Earn</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Get the most out of your assests
                </p>
              </div>
            </div>
            <div className="border-b border border-white mb-1 mt-1"></div>
            <div className="flex">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4">
                <h1 className="text-lg font-semibold">Prime</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Build your generational wealth
                </p>
              </div>
            </div>
          </div>
        )}
        <div
          onClick={() => toggleSection("exchange")}
          className="flex justify-between py-4 px-6 items-center text-lg font-semibold cursor-pointer"
        >
          <h1 className="">Exchange</h1>
          {activeSection === "exchange" ? (
            <MdExpandMore className="rotate-180" />
          ) : (
            <MdExpandMore />
          )}
        </div>

        {activeSection === "exchange" && (
          <div className="bg-[#f7f9fa] py-3 px-6 flex flex-col space-y-3 animate-slideMenu">
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">Exchange Home</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Trade with low fees and deep liquidity
                </p>
              </div>
            </div>
            <div className="border-b border border-white mb-1 mt-1"></div>
            <div className="flex items-stretch">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4">
                <h1 className="text-lg font-semibold">Margin Trading</h1>
                <p className="text-[#9ba3b4] text-sm">Get 3x leverage</p>
              </div>
            </div>
            <div className="border-b border border-white mb-1 mt-1"></div>
            <div className="flex items-stretch">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4">
                <h1 className="text-lg font-semibold">Derivatives Trading</h1>
                <p className="text-[#9ba3b4] text-sm">
                  20x leverage, ultra low latency
                </p>
              </div>
            </div>
          </div>
        )}

        <div
          onClick={() => toggleSection("defi")}
          className="flex justify-between py-4 px-6 items-center text-lg font-semibold cursor-pointer"
        >
          <h1 className="">DeFi</h1>
          {activeSection === "defi" ? (
            <MdExpandMore className="rotate-180" />
          ) : (
            <MdExpandMore />
          )}
        </div>

        {activeSection === "defi" && (
          <div className="bg-[#f7f9fa] py-3 px-6 flex flex-col space-y-3 animate-slideMenu">
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">DeFi wallet</h1>
                <p className="text-[#9ba3b4] text-sm">
                  One app, multiple Defi services
                </p>
              </div>
            </div>
            <div className="border-b border border-white mb-1 mt-1"></div>
            <div className="flex items-stretch">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4">
                <h1 className="text-lg font-semibold">Browser Extension</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Access DeFi protocols on desktop
                </p>
              </div>
            </div>
            <div className="border-b border border-white mb-1 mt-1"></div>
            <div className="flex items-stretch">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4">
                <h1 className="text-lg font-semibold">Desktop Wallet</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Easily manage your DeFi tools
                </p>
              </div>
            </div>
          </div>
        )}

        <div
          onClick={() => toggleSection("eco")}
          className="flex justify-between py-4 px-6 items-center text-lg font-semibold cursor-pointer"
        >
          <h1 className="">Ecosystem</h1>
          {activeSection === "eco" ? (
            <MdExpandMore className="rotate-180" />
          ) : (
            <MdExpandMore />
          )}
        </div>

        {activeSection === "eco" && (
          <div className="bg-[#f7f9fa] py-3 px-6 flex flex-col space-y-3 animate-slideMenu">
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">Pay for Business</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Accept crypto simply and securely
                </p>
              </div>
            </div>
          </div>
        )}

        <div
          onClick={() => toggleSection("company")}
          className="flex justify-between py-4 px-6 items-center text-lg font-semibold cursor-pointer animate-slideMenu"
        >
          <h1 className="">Company</h1>
          {activeSection === "company" ? (
            <MdExpandMore className="rotate-180" />
          ) : (
            <MdExpandMore />
          )}
        </div>

        {activeSection === "company" && (
          <div className="bg-[#f7f9fa] py-3 px-6 flex flex-col space-y-3 animate-slideMenu">
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">About</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Discover our vision, mission and team
                </p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">Careers</h1>
                <p className="text-[#9ba3b4] text-sm">Build Web3 with us</p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">News</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Company and product updates
                </p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">Support</h1>
                <p className="text-[#9ba3b4] text-sm">Get help 24/7</p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">Security</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Learn about our industry-leading protection
                </p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">Partners</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Explore out world-class portfolio of partners
                </p>
              </div>
            </div>
          </div>
        )}

        <div
          onClick={() => toggleSection("learn")}
          className="flex justify-between py-4 px-6 items-center text-lg font-semibold cursor-pointer animate-slideMenu"
        >
          <h1 className="">Learn</h1>
          {activeSection === "learn" ? (
            <MdExpandMore className="rotate-180" />
          ) : (
            <MdExpandMore />
          )}
        </div>

        {activeSection === "learn" && (
          <div className="bg-[#f7f9fa] py-3 px-6 flex flex-col space-y-3 animate-slideMenu">
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">What's Trending</h1>
                <p className="text-[#9ba3b4] text-sm">Read out top stories</p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">Market Updates</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Track the market's latest developments
                </p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">Product News</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Our latest updates and launches
                </p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">Event</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Connect online and in person
                </p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">University</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Build your crypto knowledge
                </p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">Reserach & analysis</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Get our industry-leading insights
                </p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">Bitcoin</h1>
                <p className="text-[#9ba3b4] text-sm">
                  Everything you need to know about Bitcoin
                </p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="border-l border border-[#1199fa] mt-3 mb-3"></div>
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-semibold">Glossary</h1>
                <p className="text-[#9ba3b4] text-sm">Crypto terms explained</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between py-4 px-6 items-center text-lg font-semibold cursor-pointer">
          <h1 className="">Prices</h1>
        </div>
        <div className="flex justify-between py-4 px-6 items-center text-lg font-semibold cursor-pointer">
          <h1 className="">NFT</h1>
        </div>
      </div>
    </>
  );
};

export default SlideMenu;
