import { useCallback, useEffect, useState } from "preact/hooks";
import styles from "./Navbar.module.css";

const isScrolled = () => {
  const scrollY = window.scrollY;
  let isScrolled = false;
  if (scrollY > 0) {
    isScrolled = true;
  }
  return isScrolled;
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(isScrolled());

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = isScrolled();
      if (currentScroll && !scrolled) {
        setScrolled(true);
      } else if (!currentScroll && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a>Accueil</a>
      <a>A propos</a>
      <a>Contact</a>
    </nav>
  );
};

export default Navbar;
