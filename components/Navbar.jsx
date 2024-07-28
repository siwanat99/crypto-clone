"use client";

import { useState } from "react";
import React from "react";
import { MdCurrencyExchange } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import qr from "../public/qr.png";
import Image from "next/image";
import { MdExpandMore } from "react-icons/md";

const Navbar = ({ toggleSlide }) => {
  const [isLoad, setisLoad] = useState(false);

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const toggleLoad = () => {
    setisLoad(!isLoad);
  };
  return (
    <>
      <nav className="fixed w-full ">
        <div className="bg-[#061121] py-6 ">
          <div className="flex justify-between mx-auto w-10/12 items-center h-full ">
            <div className="text-white text-2xl flex items-center gap-1 ">
              <MdCurrencyExchange />
              <h2 className="text-xl font-semibold">crypto.tan</h2>
            </div>
            <div className="hidden lg:flex items-center h-full">
              <ul className="text-white text-bold  h-full flex items-center gap-6  p-3  ">
                <Link href="" className="text-[#1199fa] font-bold">
                  Rewards+{" "}
                  <span className="text-white text-[10px] bg-[#1199fa] rounded-lg px-2 py-1">
                    NEW
                  </span>
                </Link>
                <Link href="" className="">
                  Prices
                </Link>

                <div
                  onClick={() => toggleSection("product")}
                  className="flex items-center relative cursor-pointer "
                >
                  Product <MdExpandMore />
                </div>
                {activeSection === "product" && (
                  <div className="bg-white absolute top-[80px] left-0 text-black py-10 px-4 animate-slideTop w-full">
                    <div className="">
                      <div className="grid grid-cols-4">
                        <div className="text-2xl font-semibold text-[#808080] flex justify-center">
                          Get Started
                        </div>
                        <div className="">
                          <h1 className="text-[#1099d7] font-bold mb-6 ">
                            BUY AND SELL
                          </h1>

                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7] "></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">App</h1>
                              <p className="font-semibold text-[#808080]">
                                But Bitcoin, Ethreuem, and 350+ cryptocurrencies
                              </p>
                            </div>
                          </div>

                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">
                                Crypto.com NFT
                              </h1>
                              <p className="font-semibold text-[#808080]">
                                Own the culture you love
                              </p>
                            </div>
                          </div>

                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">Prime</h1>
                              <p className="font-semibold text-[#808080]">
                                Build your generational wealth
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="">
                          <h1 className="text-[#1099d7] font-bold mb-6">
                            SPEND
                          </h1>

                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">
                                Metal Visa Cards
                              </h1>
                              <p className="font-semibold text-[#808080]">
                                Up to 5% back on all spending
                              </p>
                            </div>
                          </div>
                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">
                                Crypto.com Pay
                              </h1>
                              <p className="font-semibold text-[#808080]">
                                Spend your crypto anywhere
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="">
                          <h1 className="text-[#1099d7] font-bold mb-6">
                            GROW
                          </h1>
                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">
                                Rewards+
                              </h1>
                              <p className="font-semibold text-[#808080]">
                                Make every trade more rewarding
                              </p>
                            </div>
                          </div>
                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">
                                Crypto Earn
                              </h1>
                              <p className="font-semibold text-[#808080]">
                                Get the most out of your assets
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-b border-gray-500"></div>
                    </div>

                    <div className="grid grid-cols-4 mt-6">
                      <div className="text-2xl font-semibold text-[#808080] flex justify-center">
                        Advanced Trading
                      </div>
                      <div className="">
                        <h1 className="text-[#1099d7] font-bold mb-6 ">
                          EXCHANGE
                        </h1>

                        <div className="flex mb-8 gap-4">
                          <div className="border border-[#1099d7] "></div>
                          <div className="">
                            <h1 className="text-lg font-semibold">
                              Exchange Home
                            </h1>
                            <p className="font-semibold text-[#808080]">
                              Trade with low fees and deep liquidity
                            </p>
                          </div>
                        </div>

                        <div className="flex mb-8 gap-4">
                          <div className="border border-[#1099d7]"></div>
                          <div className="">
                            <h1 className="text-lg font-semibold">
                              Margin Trading
                            </h1>
                            <p className="font-semibold text-[#808080]">
                              Get 3x leverage
                            </p>
                          </div>
                        </div>

                        <div className="flex mb-8 gap-4">
                          <div className="border border-[#1099d7]"></div>
                          <div className="">
                            <h1 className="text-lg font-semibold">
                              Derivatives Trading
                            </h1>
                            <p className="font-semibold text-[#808080]">
                              20x leverage, ultra low latency
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <h1 className="text-[#1099d7] font-bold mb-6">DEFI</h1>

                        <div className="flex mb-8 gap-4">
                          <div className="border border-[#1099d7]"></div>
                          <div className="">
                            <h1 className="text-lg font-semibold">
                              DeFi Wallet
                            </h1>
                            <p className="font-semibold text-[#808080]">
                              One app, multiple DeFi serviecs
                            </p>
                          </div>
                        </div>
                        <div className="flex mb-8 gap-4">
                          <div className="border border-[#1099d7]"></div>
                          <div className="">
                            <h1 className="text-lg font-semibold">
                              Browser Extension
                            </h1>
                            <p className="font-semibold text-[#808080]">
                              Access DeFi protocols on desktop
                            </p>
                          </div>
                        </div>
                        <div className="flex mb-8 gap-4">
                          <div className="border border-[#1099d7]"></div>
                          <div className="">
                            <h1 className="text-lg font-semibold">
                              Desktop Wallet
                            </h1>
                            <p className="font-semibold text-[#808080]">
                              Easily manage your DeFi tools
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <h1 className="text-[#1099d7] font-bold mb-6">
                          ECOSYSTEM
                        </h1>
                        <div className="flex mb-8 gap-4">
                          <div className="border border-[#1099d7]"></div>
                          <div className="">
                            <h1 className="text-lg font-semibold">
                              Pay for Business
                            </h1>
                            <p className="font-semibold text-[#808080]">
                              Accept crypto simply and securely
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div
                  onClick={() => toggleSection("company")}
                  className="flex items-center cursor-pointer"
                >
                  Company <MdExpandMore />
                </div>

                {activeSection === "company" && (
                  <div className="bg-white absolute top-[80px] left-0 text-black pt-10 pb-4 px-4 animate-slideTop w-full">
                    <div className="">
                      <div className="grid grid-cols-3">
                        <div className="text-2xl font-semibold text-[#808080] flex justify-center">
                          About us
                        </div>
                        <div className="">
                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7] "></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">About</h1>
                              <p className="font-semibold text-[#808080]">
                                Discover our vision, mission and team
                              </p>
                            </div>
                          </div>

                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">Careers</h1>
                              <p className="font-semibold text-[#808080]">
                                Build Web3 with us
                              </p>
                            </div>
                          </div>

                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">News</h1>
                              <p className="font-semibold text-[#808080]">
                                Company and product updates
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="">
                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">Support</h1>
                              <p className="font-semibold text-[#808080]">
                                Get help 24/7
                              </p>
                            </div>
                          </div>
                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">
                                Security
                              </h1>
                              <p className="font-semibold text-[#808080]">
                                Learn about our industry-leading protection
                              </p>
                            </div>
                          </div>
                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">
                                Partners
                              </h1>
                              <p className="font-semibold text-[#808080]">
                                Explore our world-class portfolio of partners
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div
                  onClick={() => toggleSection("learn")}
                  className="flex items-center cursor-pointer"
                >
                  Learn <MdExpandMore />
                </div>

                {activeSection === "learn" && (
                  <div className="bg-white absolute top-[80px] left-0 text-black py-10 px-4 animate-slideTop w-full">
                    <div className="">
                      <div className="grid grid-cols-3">
                        <div className="text-2xl font-semibold text-[#808080] flex justify-center">
                          Updates
                        </div>
                        <div className="">
                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7] "></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">
                                What's Trending
                              </h1>
                              <p className="font-semibold text-[#808080]">
                                Read our top stories
                              </p>
                            </div>
                          </div>

                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">
                                Product News
                              </h1>
                              <p className="font-semibold text-[#808080]">
                                Our latest updates and launches
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">Events</h1>
                              <p className="font-semibold text-[#808080]">
                                Connect online and in person
                              </p>
                            </div>
                          </div>
                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">
                                Market Updates
                              </h1>
                              <p className="font-semibold text-[#808080]">
                                Track the market's latest development
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-b border-gray-500"></div>

                      <div className="grid grid-cols-3 mt-6">
                        <div className="text-2xl font-semibold text-[#808080] flex justify-center">
                          Resources
                        </div>
                        <div className="">
                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7] "></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">
                                University
                              </h1>
                              <p className="font-semibold text-[#808080]">
                                Build your crypto knowledge
                              </p>
                            </div>
                          </div>

                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">Bitcoin</h1>
                              <p className="font-semibold text-[#808080]">
                                Everything you need to know about bitcoin
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">
                                Research & Analysis
                              </h1>
                              <p className="font-semibold text-[#808080]">
                                Get our industry-leading insights
                              </p>
                            </div>
                          </div>
                          <div className="flex mb-8 gap-4">
                            <div className="border border-[#1099d7]"></div>
                            <div className="">
                              <h1 className="text-lg font-semibold">
                                Glossary
                              </h1>
                              <p className="font-semibold text-[#808080]">
                                Crypto terms explained
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </ul>
            </div>
            <div className="flex gap-4">
              <div
                onClick={toggleLoad}
                className=" justify-center rounded-full border border-[#0a4573] py-2 w-[185px] text-white font-semibold cursor-pointer hover:bg-[#2f3841] hidden md:flex"
              >
                {isLoad ? <h1>Scan to Download</h1> : <h1>Download App</h1>}
              </div>
              <div
                className="text-3xl text-white cursor-pointer flex items-center hover:text-4xl transition-all duration-400 hover:-rotate-180 lg:hidden"
                onClick={toggleSlide}
              >
                <RxHamburgerMenu />
              </div>

              {isLoad ? (
                <Image
                  src={qr}
                  className="absolute w-[185px] border border-[#0a4573] p-4 rounded-2xl bg-[#06162a] top-16 animate-slideTop"
                ></Image>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
