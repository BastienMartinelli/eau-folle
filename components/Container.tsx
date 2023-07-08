import { PropsWithChildren } from "react";
import cx from "@/utils/cx";

export default function Container({
  children,
  className,
  ...props
}: PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
  return (
    <div
      className={cx("max-w-screen-xl mx-auto md:p-8 p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
