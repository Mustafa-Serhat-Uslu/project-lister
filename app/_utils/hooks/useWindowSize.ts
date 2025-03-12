import { useEffect, useState } from "react";

export const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState(window?.innerWidth);

  useEffect(() => {
    if (!window) return;
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};
