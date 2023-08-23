import React from "react";
import classNames from "classnames";
// styles
import styles from "./styles.module.scss";

// ----------------------------------------------------------------------
type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  inputClassName?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  startAdornmentType?: "inherit" | "fill";
  endAdornmentType?: "inherit" | "fill";
};

const TextField = ({
  className,
  inputClassName,
  startAdornment,
  endAdornment,
  startAdornmentType,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endAdornmentType,
  ...other
}: Props) => {
  return (
    <div className={classNames("relative w-full", className)}>
      {startAdornment ? (
        <div
          className={classNames(styles.startAdornment, {
            ["bg-secondary px-8 rounded-5"]: startAdornmentType === "fill",
          })}
        >
          <div
            className={classNames({ ["w-24"]: startAdornmentType !== "fill" })}
          >
            {startAdornment}
          </div>
        </div>
      ) : null}

      <input
        type="text"
        className={classNames(inputClassName, styles.input, {
          ["pl-40"]: !!startAdornment,
          ["pr-40"]: !!endAdornment,
        })}
        {...other}
      />

      {endAdornment ? (
        <div className={styles.endAdornment}>
          <div
            className={classNames({ ["w-24"]: endAdornmentType !== "fill" })}
          >
            {endAdornment}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TextField;
