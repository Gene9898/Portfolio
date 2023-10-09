import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
export default function Home() {
	const [hashChange, setHashChange] = useState(false);
	return (
		<main
			id="home"
			className={`w-screen h-screen ${hashChange ? "pt-0" : "pt-40"}`}
		>
			<Navbar />
			<About />
			<Education />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
