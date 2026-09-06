import cx from "@/utils/cx";

export default function Breadcrumb({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className={cx("mb-4 text-sm text-gray-500", className)}
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <a href="/" className="hover:text-primary hover:underline">
            Accueil
          </a>
        </li>
        <li aria-hidden="true">›</li>
        <li aria-current="page" className="text-primary font-medium">
          {label}
        </li>
      </ol>
    </nav>
  );
}
