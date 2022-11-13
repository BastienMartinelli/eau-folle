import { useEffect } from "preact/hooks";
import cx from "../../utils/cx";
import useTimeTransition from "../../utils/useTimeTransition";

import styles from "./Drawer.module.css";

const Drawer = ({ open, onClose, children, className }) => {
  const show = useTimeTransition(open);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    }
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  return (
    show && (
      <div className={cx(styles.root, open && styles.open)}>
        <div className={styles.overlay} onClick={onClose} />
        <div
          className={cx(
            styles.content,
            className,
            open && styles.open,
            !open && styles.close
          )}
          onClick={onClose}
          role="dialogue"
        >
          {show && (
            <>
              <div />
              {children}
              <div />
            </>
          )}
        </div>
      </div>
    )
  );
};

export default Drawer;
