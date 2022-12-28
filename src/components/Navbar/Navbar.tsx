import { useEffect, useState } from "preact/hooks";
import cx from "../../utils/cx";
import { useIsMobile } from "../../utils/useMediaQuery";
import useScrollTrigger from "../../utils/useScrollTrigger";
import Drawer from "../Drawer";

import * as styles from "./Navbar.module.css";

type Page = "gamme" | "home" | "contact" | "histoire";

const subPages = ["gamme", "contact", "histoire"];

const Navbar = () => {
  const scrolled = useScrollTrigger();
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState<string>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.href;
    const page = subPages.find((s) => currentUrl.includes(s));
    setCurrent(page || "home");
  }, []);

  const getCurrent = (page: Page) => {
    return current === page ? { "aria-current": "page" } : {};
  };

  const content = (
    <>
      <li>
        <a href="/" {...getCurrent("home")}>
          Accueil
        </a>
      </li>
      <li>
        <a href="/histoire" {...getCurrent("histoire")}>
          Histoire
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
    </>
  );

  return (
    <nav className={cx(styles.nav, scrolled && styles.scrolled, "container")}>
      <div>
        <a aria-label="accueil" href="/">
          <img src="/logo-text.svg" height="50px" alt="L'eau folle logo" />
        </a>
        <div>
          {!isMobile && isMobile != null && (
            <ul className={styles.navList}>{content}</ul>
          )}
          {isMobile && (
            <button
              className={styles.drawerButton}
              onClick={() => setOpen((p) => !p)}
            >
              <span class="material-icons">menu</span>
            </button>
          )}
        </div>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <ul className={styles.drawerList}>
            <img
              src="/logo-text.svg"
              alt="L'eau folle logo"
              style={{
                minWidth: 150,
                minHeight: 50,
              }}
            />
            {content}
          </ul>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
