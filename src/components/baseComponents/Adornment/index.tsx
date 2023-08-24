import { ReactNode } from "react";
import classNames from "classnames";
// types
import { InputAdornmentType } from "./types";

// ----------------------------------------------------------------------
type Props = {
  className?: string;
  type?: InputAdornmentType;
  children: ReactNode;
};

const InputAdornment = ({ className, type = "inherit", children }: Props) => {
  return (
    <div
      className={classNames(
        "absolute inset-y-0 flex items-center",
        className,
        {
          ["bg-secondary px-8 rounded-5"]: type === "fill",
        }
      )}
    >
      <div
        className={classNames("h-24 flex items-center justify-center", {
          ["w-24"]: type === "inherit",
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default InputAdornment;
