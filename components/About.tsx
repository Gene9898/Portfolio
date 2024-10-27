import React, { useEffect, useState, useRef } from "react";

const About = React.forwardRef((props, ref) => {
	return (
		<section
			// ref={ref}
			id="about"
			className={`w-full h-1/3 z-10 border-b-2 border-gray-100 p-0 scroll-m-40`}
		>
			About-Gittest
		</section>
	);
});
About.displayName = "About";
export default About;
