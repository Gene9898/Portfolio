import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Education from "@/components/Experience";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import CursorHighlight from "@/components/CursorHighlight";
import Content from "@/components/Content";
export default function Home() {
  return (
    <main
      id="home"
      className={`w-full h-full flex flex-col gap-20 lg:gap-0 px-12 lg:flex-row lg:px-24 xl:px-48 py-20 relative text-white`}
    >
      <CursorHighlight />
      <Navbar />
      <Content />
    </main>
  );
}
