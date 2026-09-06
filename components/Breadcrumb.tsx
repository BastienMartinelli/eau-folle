import cx from "@/utils/cx";

type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumb({
  items,
  className,
}: {
  items: Crumb[];
  className?: string;
}) {
  const crumbs: Crumb[] = [{ label: "Accueil", href: "/" }, ...items];

  return (
    <nav
      aria-label="Fil d'Ariane"
      className={cx("mb-4 text-sm text-gray-700 text-contour", className)}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.href ?? crumb.label} className="flex items-center gap-2">
              {crumb.href && !isLast ? (
                <a
                  href={crumb.href}
                  className="hover:text-primary hover:underline"
                >
                  {crumb.label}
                </a>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cx(isLast && "text-primary font-medium")}
                >
                  {crumb.label}
                </span>
              )}
              {!isLast && <span aria-hidden="true">›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
