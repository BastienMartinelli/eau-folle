import React from "react";
import cx from "@/utils/cx";

type ButtonOwnProps<T extends React.ElementType> = {
  /** Component or element used as the root node. Defaults to `"button"`. */
  as?: T;
  className?: string;
  children?: React.ReactNode;
};

type ButtonProps<T extends React.ElementType> = ButtonOwnProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

export default function Button<T extends React.ElementType = "button">({
  as,
  className,
  children,
  ...otherProps
}: ButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={cx(
        "inline-block py-1.5 px-3 text-sm md:py-2 md:px-4 md:text-lg font-medium bg-primary hover:bg-primary-700 rounded-xl text-white transition-colors whitespace-nowrap",
        className,
      )}
      {...otherProps}
    >
      {children}
    </Component>
  );
}
