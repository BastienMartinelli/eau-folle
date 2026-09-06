"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import cx from "@/utils/cx";

type PillsProps = {
  /** One pill per item, in order. */
  items: string[];
  /** Currently selected item, or null / undefined for "all". */
  selected?: string | null;
  /** Search param name written to the URL when a pill is clicked. */
  paramName?: string;
  /** Label of the leading "reset" pill. */
  allLabel?: string;
  className?: string;
};

export default function Pills({
  items,
  selected = null,
  paramName = "category",
  allLabel = "Tout",
  className,
}: PillsProps) {
  const pathname = usePathname();
  const current = useSearchParams().get(paramName) ?? selected;

  const pills: { label: string; value: string | null }[] = [
    { label: allLabel, value: null },
    ...items.map((item) => ({ label: item, value: item })),
  ];

  return (
    <ul className={cx("flex flex-wrap gap-3", className)}>
      {pills.map(({ label, value }) => {
        const active = value === current || (value === null && !current);

        return (
          <li key={label}>
            <Link
              href={
                value
                  ? `${pathname}?${paramName}=${encodeURIComponent(value)}`
                  : pathname
              }
              scroll={false}
              aria-current={active ? "true" : undefined}
              className={cx(
                "inline-block rounded-full border px-4 py-1.5 text-lg transition-colors",
                active
                  ? "border-primary bg-primary text-white"
                  : "border-primary/40 text-primary hover:border-primary hover:bg-primary/5"
              )}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
