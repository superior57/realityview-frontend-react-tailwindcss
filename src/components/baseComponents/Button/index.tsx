import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

// ----------------------------------------------------------------------
type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, children, ...other }: Props) => {
  return (
    <button className={classNames(className, styles.button)} {...other}>
      {children}
    </button>
  );
};

export default Button;
