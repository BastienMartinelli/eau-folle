import { useEffect, useState } from "react";

const isScrolled = () => {
  const scrollY = globalThis.window.scrollY || 0;
  return scrollY > 0;
};

function useScrollTrigger() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = isScrolled();
      if (currentScroll && !scrolled) {
        setScrolled(true);
      } else if (!currentScroll && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, setScrolled]);

  return scrolled;
}

export default useScrollTrigger;
