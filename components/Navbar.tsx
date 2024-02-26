"use client";

import { useState } from "react";
import cx from "@/utils/cx";
import useScrollTrigger from "../utils/useScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { pages } from "@/data/pages";
import Container from "./Container";

function NavLink({
  current,
  children,
  burger,
  ...otherProps
}: React.ComponentProps<typeof Link> & {
  burger?: boolean;
  current?: boolean;
}) {
  return (
    <Link
      className={cx(
        "text-gray-600 text-xl",
        !burger &&
          "hover:text-primary p-0 bg-transparent border-0 transition-colors",
        burger && "block py-2 pl-3 pr-4 rounded-md hover:bg-gray-100",
        current && "font-bold text-primary"
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
}

const Navbar = () => {
  const scrolled = useScrollTrigger();
  const [open, setOpen] = useState(false);

  const currentPath = usePathname();

  const getCurrent = (page: string): any => {
    return currentPath === page
      ? { "aria-current": "page", current: true }
      : {};
  };

  const isHomePage = currentPath === "/";

  return (
    <nav
      className={cx(
        scrolled || open ? "bg-white shadow-lg" : "bg-transparent",
        "transition-colors w-full top-0 z-50",
        isHomePage ? "fixed" : "sticky"
      )}
    >
      <Container className="flex-row flex flex-wrap items-center justify-between ">
        <a className="flex items-center" aria-label="accueil" href="/">
          <Image
            src="/logo-text.svg"
            height={50}
            width={80}
            alt="L'eau folle logo"
          />
        </a>
        <div className="w-auto">
          <ul className="hidden md:flex font-medium flex-row md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {pages.map((page) => (
              <NavLink
                key={page.link}
                href={page.link}
                {...getCurrent(page.link)}
              >
                {page.name}
              </NavLink>
            ))}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {open && (
          <div className="w-full md:hidden" id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-8 pb-2 gap-2">
              {pages.map((page) => (
                <NavLink
                  key={page.link}
                  href={page.link}
                  burger
                  {...getCurrent(page.link)}
                >
                  {page.name}
                </NavLink>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
