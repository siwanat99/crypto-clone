"use client";

import { useState } from "react";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Faq = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  return (
    <>
      <div className="bg-[#0b1426] text-white py-10 px-10 xl:px-20">
        <div className="">
          <h1 className="font-semibold mb-10 text-2xl">
            Frequently Asked Questions
          </h1>
          <div className="">
            <div
              onClick={() => toggleSection("first")}
              className="flex justify-between mb-6 text-lg font-semibold items-center cursor-pointer "
            >
              <h1 className="">What is crypto?</h1>
              {activeSection === "first" ? (
                <FaMinus />
              ) : (
                <FaPlus className="hover:-rotate-90 transition-all duration-300" />
              )}
            </div>
            {activeSection === "first" && (
              <p className="mb-4">
                Cryptocurrency is a digital or virtual currency that operates on
                distributed ledger technology called a blockchain and uses
                cryptography for security. It is decentralized and operates
                independently of a central bank. Unlike traditional currencies,
                cryptocurrencies are not backed by a physical commodity or
                government, and their value is determined by market demand and
                supply. Cryptocurrencies can be used to buy goods and services,
                transfer funds, and trade in markets. Popular cryptocurrencies
                include Bitcoin, Ethereum, Litecoin, Ripple, and Cronos. Many
                cryptocurrencies, like Bitcoin, are created through a process
                called mining, which involves solving complex mathematical
                equations to validate and record transactions on a blockchain.
                This mechanism is also called Proof of Work (PoW). Another
                consensus mechanism that has increased in popularity — as it is
                more energy efficient — is Proof of Stake (PoS). Instead of
                mining, PoS relies on network participants validating
                transactions. Ethereum, the second-largest cryptocurrency, uses
                this consensus mechanism.
              </p>
            )}
            <div className="border-b border-white"></div>
            <div
              onClick={() => toggleSection("second")}
              className="flex justify-between mb-6 mt-6 text-lg font-semibold items-center cursor-pointer"
            >
              <h1 className="">Where to buy crypto?</h1>
              {activeSection === "second" ? (
                <FaMinus />
              ) : (
                <FaPlus className="hover:-rotate-90 transition-all duration-300" />
              )}
            </div>
            {activeSection === "second" && (
              <p className="mb-4">
                There are several ways to buy cryptocurrencies, including:
                Brokerage services: Crypto brokers allow users to simply buy and
                sell cryptocurrencies. A popular example is the Crypto.com App,
                trusted by over 100 million users. It is available at the Apple
                Store and on Google Play. Cryptocurrency exchanges: These are
                online platforms where users can buy, sell, and trade
                cryptocurrencies using fiat currency or other cryptocurrencies.
                They offer more complex functions compared to a crypto
                brokerage, adding trading instruments like crypto derivatives.
                The Crypto.com Exchange is an example of a popular crypto
                exchange. Peer-to-peer (P2P) marketplaces: These are platforms
                where buyers and sellers can directly trade cryptocurrencies
                without the involvement of a third-party exchange. This is also
                known as DeFi, short for decentralized finance. Multiple P2P
                crypto marketplaces can be accessed all in one app via the
                Crypto.com DeFi Wallet. It is important to perform proper
                research and choose a reputable platform to buy
                cryptocurrencies. For instance, Crypto.com holds the highest
                security rating in the industry. In addition, it is advisable to
                store cryptocurrencies securely in a wallet like the Crypto.com
                App or Crypto.com DeFi Wallet.
              </p>
            )}
            <div className="border-b border-white"></div>
            <div
              onClick={() => toggleSection("third")}
              className="flex justify-between mb-6 mt-6 text-lg font-semibold items-center cursor-pointer"
            >
              <h1 className="">How to buy crypto?</h1>
              {activeSection === "third" ? (
                <FaMinus />
              ) : (
                <FaPlus className="hover:-rotate-90 transition-all duration-300" />
              )}
            </div>
            {activeSection === "third" && (
              <p className="mb-4">
                To buy crypto, follow these general steps: Choose a crypto
                platform to use, like the Crypto.com Exchange or Crypto.com App.
                Create an account on the chosen platform by providing personal
                information and ID verification, also known as ‘Know Your
                Customer’ (KYC) procedures. Deposit fiat currency or another
                cryptocurrency into the newly created account. The Crypto.com
                App supports bank transfers, credit cards, debit cards, and
                cryptocurrency transfers to buy crypto, depending on region.
                Navigate to the ‘Buy’ section of the Crypto.com Exchange or App
                and select the crypto to buy. Enter the amount of cryptocurrency
                to buy and confirm the transaction. The crypto will be deposited
                into the account. From here, it can be transferred to other
                crypto wallets or converted back to fiat currency and paid out
                to a bank account. It is important to perform proper research
                and choose a reputable platform to buy cryptocurrencies. For
                instance, Crypto.com holds the highest security rating in the
                industry. In addition, it is advisable to store cryptocurrencies
                securely in a wallet like the Crypto.com App or Crypto.com DeFi
                Wallet.
              </p>
            )}
            <div className="border-b border-white"></div>
            <div
              onClick={() => toggleSection("fourth")}
              className="flex justify-between mb-6 mt-6 text-lg font-semibold items-center cursor-pointer"
            >
              <h1 className="">How to trade crypto?</h1>
              {activeSection === "fourth" ? (
                <FaMinus />
              ) : (
                <FaPlus className="hover:-rotate-90 transition-all duration-300" />
              )}
            </div>
            {activeSection === "fourth" && (
              <p className="mb-4">
                To trade cryptocurrency, follow these general steps: Choose a
                cryptocurrency exchange that supports trading. A popular option
                is the Crypto.com Exchange. Create an account on the chosen
                platform and perform ID verification, known as KYC (‘Know Your
                Customer’). Deposit funds into the newly created account using a
                supported payment method. The Crypto.com Exchange supports bank
                transfers and credit/debit cards. Navigate to the trading
                section of the platform and select the cryptocurrency pair to
                trade. Choose whether to buy or sell the cryptocurrency, and
                enter the amount to trade. Set the preferred price and order
                type. There are several types of orders, including market
                orders, limit orders, stop orders, and crypto options, which
                allow users to buy or sell at a specific price or under certain
                conditions. Submit the trade order and wait for it to be
                executed. Depending on market conditions, the trade may be
                filled immediately, or it may take time to be filled. Monitor
                trades and adjust strategies as necessary. Here is an
                introduction to trading on the Crypto.com Exchange. It is
                crucial to note that trading cryptocurrency carries risk, and it
                is important to trade only what you can afford to lose.
              </p>
            )}
            <div className="border-b border-white"></div>
            <div
              onClick={() => toggleSection("fifth")}
              className="flex justify-between mb-6 mt-6 text-lg font-semibold items-center cursor-pointer"
            >
              <h1 className="">How to earn crypto?</h1>
              {activeSection === "fifth" ? (
                <FaMinus />
              ) : (
                <FaPlus className="hover:-rotate-90 transition-all duration-300" />
              )}
            </div>
            {activeSection === "fifth" && (
              <p className="mb-4">
                There are several ways to earn cryptocurrency, including:
                Mining: Cryptocurrency mining involves using specialized
                computer hardware to solve complex mathematical equations that
                validate transactions on a blockchain network. Successful miners
                are rewarded with newly minted cryptocurrency for their efforts.
                Staking/Lockups: Staking and lockups involve holding or locking
                up a certain amount of cryptocurrency in a wallet or on a
                platform to support the operations of the blockchain network.
                Stakers are rewarded with new cryptocurrency as a form of
                interest for their support. Trading: Trading cryptocurrency
                involves buying and selling cryptocurrencies on exchanges or
                other trading platforms. Those who have a good understanding of
                market trends and are able to make informed trading decisions
                can earn profits through trading. Airdrops: Airdrops are free
                distributions of cryptocurrency to users who meet certain
                criteria or participate in promotional activities. Crypto
                Projects: Some blockchain projects offer rewards or bounties for
                users who contribute to their development or community. This can
                include activities like bug bounties, testing, or content
                creation. It's important to note that each method of earning
                cryptocurrency carries its own risks and rewards. It is
                recommended to carefully research cryptocurrencies and
                understand the process before buying. Learn more about the
                crypto market at Crypto.com University.
              </p>
            )}
            <div className="border-b border-white"></div>
            <div
              onClick={() => toggleSection("sixth")}
              className="flex justify-between mb-6 mt-6 text-lg font-semibold items-center cursor-pointer"
            >
              <h1 className="">How to earn rewards on crypto?</h1>
              {activeSection === "sixth" ? (
                <FaMinus />
              ) : (
                <FaPlus className="hover:-rotate-90 transition-all duration-300" />
              )}
            </div>
            {activeSection === "sixth" && (
              <p className="mb-4">
                Users can earn rewards on their cryptocurrency holdings through
                various products that offer rewards-bearing accounts or lending
                services. Here are some ways to earn rewards on cryptocurrency:
                The Crypto.com App, Exchange, and DeFi Wallet all offer
                different ways to earn rewards on crypto, called Crypto Earn.
                Create an account on the chosen platform and deposit
                cryptocurrency holdings into the rewards account. Depending on
                the platform, users may earn rewards through lending their
                cryptocurrency to other users or by locking up their
                cryptocurrency for a period of time. Some products offer fixed
                reward rates (e.g., the Crypto.com Visa Card), while others may
                offer variable rates that depend on market conditions (e.g., the
                'Earn' feature in the Crypto.com DeFi Wallet). Monitor rewards
                and adjust strategies as necessary. It's important to note that
                earning interest and rewards on cryptocurrency carries risks,
                including fluctuations in market conditions that may affect
                interest rates. Make sure to carefully research and understand
                terms and conditions before depositing cryptocurrency.
              </p>
            )}
            <div className="border-b border-white"></div>
          </div>
          <div className="mt-6 text-lg font-semibold">
            Have more question?{" "}
            <span className="text-[#108fe8]"> Contact Us </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
