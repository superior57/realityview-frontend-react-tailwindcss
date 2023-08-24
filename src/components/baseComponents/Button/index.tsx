import React from "react";
import classNames from "classnames";

// ----------------------------------------------------------------------
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "inherit" | "primary" | "secondary";
  variant?: "contained" | "outlined" | "text";
};

const Button = ({
  className,
  color = "primary",
  variant = "contained",
  children,
  ...other
}: Props) => {
  return (
    <button
      className={classNames(
        "w-215 h-40 rounded-5 font-semibold leading-23 text-18 font-montserrat disabled:bg-button-disabled cursor-pointer",
        {
          ["bg-button-primary hover:bg-button-primary-hover text-white"]:
            color === "primary" && variant === "contained",
          ["border-1 border-primary text-primary"]:
            color === "primary" && variant === "outlined",
        },
        className
      )}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
