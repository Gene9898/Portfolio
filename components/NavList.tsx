import { useState, useEffect, useMemo } from "react";
import { BsDiamond, BsDiamondFill } from "react-icons/bs";

const NavList = () => {
  const [elementHeights, setElementHeights] = useState<[number, number][]>([]);

  const navElements = useMemo(
    () => ["about", "experience", "education", "projects"],
    []
  );
  const [navFocus, setNavFocus] = useState(navElements[0]);

  useEffect(() => {
    const handleResize = () => {
      const arr: [number, number][] = [];
      navElements.forEach((navElem, i) => {
        const element = document.getElementById(navElem);
        const curElementHeight = element?.offsetHeight || 0;
        if (i === 0) {
          arr.push([0, curElementHeight - 80]);
        } else {
          arr.push([arr[i - 1][1], arr[i - 1][1] + curElementHeight - 60]);
        }
      });

      setElementHeights(arr);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial calculation

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navElements]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementIndex = navElements.indexOf(navFocus);
      if (
        elementIndex > 0 &&
        scrollPosition < elementHeights[elementIndex][0]
      ) {
        setNavFocus(navElements[elementIndex - 1]);
      } else if (
        elementIndex < navElements.length - 1 &&
        scrollPosition > elementHeights[elementIndex][1]
      ) {
        setNavFocus(navElements[elementIndex + 1]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementHeights, navElements, navFocus]);

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
