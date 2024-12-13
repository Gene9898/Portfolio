import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
export default function Home() {
  return (
    <main
      id="home"
      className={`w-full h-full flex flex-col gap-20 lg:gap-0 px-12 lg:flex-row lg:px-24 xl:px-48 py-20 relative text-white`}
    >
      <Navbar className="lg:w-[40%] h-full" />
      <Content className="lg:w-[60%] h-full" />
    </main>
  );
}
