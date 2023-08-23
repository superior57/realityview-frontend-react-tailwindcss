import React from "react";
import classNames from "classnames";

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
          className={classNames(
            "absolute inset-y-0 flex items-center pointer-events-none left-0 pl-8",
            {
              ["bg-secondary px-8 rounded-5"]: startAdornmentType === "fill",
            }
          )}
        >
          <div
            className={classNames("h-24 flex items-center justify-center", {
              ["w-24"]: startAdornmentType !== "fill",
            })}
          >
            {startAdornment}
          </div>
        </div>
      ) : null}

      <input
        type="text"
        className={classNames(
          inputClassName,
          "body1 bg-netural rounded-5 h-40 text-primary p-16 outline-none w-full placeholder:caption1 placeholder:tracking-normal",
          {
            ["pl-40"]: !!startAdornment,
            ["pr-40"]: !!endAdornment,
            ["font-bold tracking-2"]: other.type === "password",
          }
        )}
        {...other}
      />

      {endAdornment ? (
        <div className="absolute inset-y-0 flex items-center pointer-events-none right-0 pr-8">
          <div
            className={classNames("h-24 flex items-center justify-center", {
              ["w-24"]: endAdornmentType !== "fill",
            })}
          >
            {endAdornment}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TextField;
