import React, { useState } from "react";
import { navbarContent } from "@/constants/constants";
import NavList from "./NavList";
import NavLinks from "./NavLinks";
const Navbar = () => {
  return (
    <header className="lg:w-1/2 h-full relative min-h-full">
      <div className="flex flex-col gap-10 lg:gap-20 justify-start lg:fixed lg:w-[calc(50%-96px)] xl:w-[calc(50%-192px)] lg:h-[calc(100%-160px)] lg:min-h-[calc(100%-160px)] pr-5">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl tracking-widest">{navbarContent.name}</h1>
          <p className="title">{navbarContent.jobTitle}</p>
          <p className="content">{navbarContent.introduction}</p>
        </div>

        <NavList />
        <NavLinks />
      </div>
    </header>
  );
};

export default Navbar;
