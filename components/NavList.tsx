import { useState, useEffect, useMemo } from "react";
import { BsDiamond, BsDiamondFill } from "react-icons/bs";

const NavList = () => {
  const [elementHeights, setElementHeights] = useState<[number, number][]>([]);

  const navElements = useMemo(
    () => ["about", "experience", "projects"],
    []
  );
  const [navFocus, setNavFocus] = useState(navElements[0]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setNavFocus(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navElements.forEach((navElem) => {
      const element = document.getElementById(navElem);
      if (element) observer.observe(element);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [navElements]);

  return (
    <div className="hidden lg:flex flex-col w-fit gap-6 ">
      {navElements.map((navElem) => (
        <a
          key={navElem}
          className={`navElement ${
            navFocus === navElem
              ? "opacity-100 pl-8"
              : "opacity-60 hover:pl-4 hover:opacity-100"
          } `}
          href={`#${navElem}`}
        >
          {navFocus === navElem ? (
            <BsDiamondFill className={`navLogo`} />
          ) : (
            <BsDiamond className={`navLogo`} />
          )}
          <p className="tracking-widest first-letter:capitalize">{navElem}</p>
        </a>
      ))}
    </div>
  );
};

export default NavList;
