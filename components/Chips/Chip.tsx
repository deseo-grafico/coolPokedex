import React from "react";
import chipStyles from "./Chip.module.sass"

type ButtonAs = "span" | "div";
type ChipProps = {
  children?: JSX.Element | string;
  as?: ButtonAs;
};

const Chip = ({ as, children }: ChipProps) => {
  const Component = as || "span";

  return (
    <Component className={chipStyles.chipContainer}>{children}</Component>
  );
};

export default Chip;
