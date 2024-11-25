import { useState, useEffect } from "react";
import { Position } from "@/types/types";
type CursorHighlightProps = {
  position: Position;
};
const CursorHighlight = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent): void => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Attach event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className="hidden lg:block w-full h-full pointer-events-none fixed z-30"
      style={{
        transform: `translate(${position.x - 1250}px, ${position.y - 500}px)`,
        background: `radial-gradient(600px at 1093px 430px, rgba(119,126,140, 0.15), transparent 80%)`,
      }}
    ></div>
  );
};

export default CursorHighlight;
