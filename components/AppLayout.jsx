"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import SlideMenu from "@/components/SlideMenu";
import Hero from "@/components/Hero";

const AppLayout = () => {
  const [slideUpdate, setSlideUpdate] = useState(false);

  const toggleSlide = () => {
    setSlideUpdate(!slideUpdate);
  };

  return (
    <>
      <SlideMenu slideUpdate={slideUpdate} toggleSlide={toggleSlide} />
      <Navbar toggleSlide={toggleSlide} />
      <Hero />
    </>
  );
};

export default AppLayout;
