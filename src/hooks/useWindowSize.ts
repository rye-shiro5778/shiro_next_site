import { useEffect, useState } from "react";

export function useWindowSize() {
  let width: number = 1024;
  let height: number = 640;

  if (process.browser) {
    width = window.innerWidth;
    height = window.innerHeight;
  }

  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width,
    height,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
