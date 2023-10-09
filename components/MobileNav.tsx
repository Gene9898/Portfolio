import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { handleScroll } from "@/lib/utils";
const MobileNav = () => {
	const [mobileNav, setMobileNav] = useState(false);

	return (
		<div className="mobileNav:hidden">
			{!mobileNav && (
				<AiOutlineMenu
					size={36}
					className="cursor-pointer mobileNav:max-h-0"
					onClick={() => {
						setMobileNav(true);
					}}
				/>
			)}
			<div
				className={`absolute bg-white top-0 left-0 h-screen overflow-hidden ${
					mobileNav ? "w-screen" : "w-0"
				} transition-width duration-300`}
			>
				<section className="h-1/6 flex justify-end items-center px-16">
					<RxCross1
						size={36}
						onClick={() => {
							setMobileNav(false);
						}}
					/>
				</section>
                <div className="flex flex-col flex-wrap gap-4 items-center justify-center">
                    <li className="p-3 hover:text-blue-500 hover:pt-1 hover:scale-125" onClick={()=>{handleScroll("about"); setMobileNav(false)}}><h3>About</h3></li>
                    <li className="p-3 hover:text-blue-500 hover:pt-1 hover:scale-125" onClick={()=>{handleScroll("education"); setMobileNav(false)}}><h3>Education</h3></li>
                    <li className="p-3 hover:text-blue-500 hover:pt-1 hover:scale-125" onClick={()=>{handleScroll("projects"); setMobileNav(false)}}><h3>Projects</h3></li>
                    <li className="p-3 hover:text-blue-500 hover:pt-1 hover:scale-125" onClick={()=>{handleScroll("contact"); setMobileNav(false)}}><h3>Contact</h3></li>
                </div>
			</div>
		</div>
	);
};

export default MobileNav;
