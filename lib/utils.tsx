const handleScroll = (id: string) => {
	// Find the target element using the provided selector
	const targetElement = document.getElementById(id);
	if (targetElement) {
		targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
	}
};

export { handleScroll };
