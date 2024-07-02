import { useCallback, useEffect, useState } from "react";

const useScroll = (scrollSize = 0) => {
  const [scroll, setScroll] = useState(0);
  const [scrollTop, setScrollTop] = useState(false);

  const handleSet = useCallback(() => {
    setScroll(window?.scrollY);
    if (window?.scrollY > scrollSize) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  }, [scrollSize]);

  useEffect(() => {
    handleSet();
    window.addEventListener("scroll", handleSet);

    return () => window.removeEventListener("scroll", handleSet);
  }, [handleSet]);

  return { scrollTop, scroll };
};

export default useScroll;
