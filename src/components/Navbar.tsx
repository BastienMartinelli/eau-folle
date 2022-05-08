import { useEffect, useState } from "preact/hooks";
import styles from "./Navbar.module.css";

const isScrolled = () => {
  const scrollY = globalThis.window.scrollY || 0;
  return scrollY > 0;
};

const Navbar = () => {
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

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, setScrolled]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a>Accueil</a>
      <a>A propos</a>
      <a>Contact</a>
    </nav>
  );
};

export default Navbar;
