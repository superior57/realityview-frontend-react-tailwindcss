import React from "react";
import classNames from "classnames";

// ----------------------------------------------------------------------
type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, children, ...other }: Props) => {
  return (
    <button
      className={classNames(
        "bg-button-primary text-white w-215 h-40 rounded-5 font-semibold leading-23 text-18 font-montserrat hover:bg-button-primary-hover disabled:bg-button-disabled",
        className
      )}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
