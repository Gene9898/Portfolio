import React, { useState } from "react";
import { navbarContent } from "@/constants/constants";
import NavList from "./NavList";
import NavLinks from "./NavLinks";

type NavbarProps = {
  className: string;
};

const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={`relative ${className}`}>
      <div className="flex flex-col gap-10 lg:gap-20 justify-start lg:fixed lg:w-[calc(40%-96px)] xl:w-[calc(40%-192px)] lg:h-[calc(100%-160px)] lg:min-h-[calc(100%-160px)] pr-5">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl tracking-widest font-mono">
            {navbarContent.name}
          </h1>
          <p className="navbarTitle">{navbarContent.jobTitle}</p>
          <p className="navContent">{navbarContent.introduction}</p>
        </div>

        <NavList />
        <NavLinks />
      </div>
    </header>
  );
};

export default Navbar;
