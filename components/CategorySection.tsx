"use client";

import { useSearchParams } from "next/navigation";

type CategorySectionProps = {
  /** Category this section belongs to. */
  category: string;
  /** SSR fallback value, used until the client hydrates. */
  active?: string | null;
  /** Search param that drives the filtering. */
  paramName?: string;
  children: React.ReactNode;
};

/**
 * Wraps one category block and shows/hides it purely on the client, based on
 * the `?category=` search param. Every section stays mounted, so switching
 * pills is an instant client re-render — no server round-trip.
 */
export default function CategorySection({
  category,
  active = null,
  paramName = "category",
  children,
}: CategorySectionProps) {
  const current = useSearchParams().get(paramName) ?? active;
  const visible = !current || current === category;

  return <div hidden={!visible}>{children}</div>;
}
