import { useLayoutEffect, useState } from "react";

export function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);
  useLayoutEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}
