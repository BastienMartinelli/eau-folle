"use client";

import { useEffect, useState } from "react";
import cx from "../utils/cx";
import useScrollTrigger from "../utils/useScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { pages } from "@/data/pages";
import Container from "./Container";

function NavLink({
  children,
  burger,
  ...otherProps
}: React.ComponentProps<typeof Link> & { burger?: boolean }) {
  return (
    <Link
      className={cx(
        burger &&
          "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100",
        "text-xl md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
}

const Navbar = () => {
  const scrolled = useScrollTrigger();
  const [current, setCurrent] = useState<string>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.href;
    setCurrent("home");
  }, []);

  const getCurrent = (page: string): any => {
    return current === page ? { "aria-current": "page" } : {};
  };

  const content = pages.map((page) => (
    <NavLink key={page.link} href={page.link} {...getCurrent(page.link)}>
      {page.name}
    </NavLink>
  ));

  return (
    <nav
      className={cx(
        scrolled || open ? "bg-gray-50" : "bg-transparent",
        "transition-colors sticky top-0 z-10"
      )}
    >
      <Container className="flex-row flex flex-wrap items-center justify-between p-4">
        <a className="flex items-center" aria-label="accueil" href="/">
          <Image
            src="/logo-text.svg"
            height={50}
            width={80}
            alt="L'eau folle logo"
          />
        </a>
        <div className="w-auto">
          <ul className="hidden md:flex font-medium flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {content}
          </ul>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-hamburger"
            aria-expanded={open}
            onClick={() => setOpen((p) => !p)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {open && (
          <div className="w-full md:hidden" id="navbar-hamburger">
            <Container>
              <ul className="flex flex-col font-medium mt-4 p-4">{content}</ul>
            </Container>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
