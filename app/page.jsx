import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SlideMenu from "@/components/SlideMenu";
import AppLayout from "@/components/AppLayout";
import PriceSection from "@/components/PriceSection";
import Journey from "@/components/Journey";
import Card from "@/components/Card";
import Vision from "@/components/Vision";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className=" bg-[#010118]">
        <Hero />
        <PriceSection />
        <Journey />
        <Card />
        <Vision />
        <Faq />
        <Footer />
      </div>
    </>
  );
}
