import cx from "@/utils/cx";

export default function Heading({
  as,
  children,
  className,
}: React.ComponentProps<"h1"> & { as?: string }) {
  const Element = as || ("h1" as any);
  return (
    <Element
      className={cx(
        "text-5xl font-bold tracking-tight mb-10 text-primary",
        className
      )}
    >
      {children}
    </Element>
  );
}
