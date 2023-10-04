import React from "react";
import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
export default function Home() {
	return (
		<main id="home" className="w-screen h-screen pt-40">
			<Navbar />
			<About />
			<Education />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
