import { useEffect, useState } from "preact/hooks";
import * as styles from "./Navbar.module.css";

const isScrolled = () => {
  const scrollY = globalThis.window.scrollY || 0;
  return scrollY > 0;
};

type Page = "gamme" | "home" | "contact";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState<Page>();

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

  useEffect(() => {
    const currentUrl = window.location.href;
    let page: Page = "home";

    if (currentUrl.includes("gamme")) {
      page = "gamme";
    } else if (currentUrl.includes("contact")) {
      page = "contact";
    }

    setCurrent(page);
  }, []);

  const getCurrent = (page: Page) => {
    return current === page ? { "aria-current": "page" } : {};
  };

  return (
    <nav>
      <ul className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <li>
          <a href="/" {...getCurrent("home")}>
            Accueil
          </a>
        </li>
        <li>
          <a href="/gammes" {...getCurrent("gamme")}>
            Gamme
          </a>
        </li>
        <li>
          <a href="/contact" {...getCurrent("contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
