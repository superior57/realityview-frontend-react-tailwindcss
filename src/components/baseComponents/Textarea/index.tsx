import { TextareaHTMLAttributes, useState } from "react";
import classNames from "classnames";
// components
import Button from "../Button";
import Icon from "../IconWrapper";
import InputAdornment from "../Adornment";

// ----------------------------------------------------------------------
type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  textareaClassName?: string;
  onClear?: VoidFunction;
};

const Textarea = ({
  className,
  value,
  textareaClassName,
  onChange,
  onClear,
  ...other
}: Props) => {
  const [inValue, setInValue] = useState("");

  return (
    <div className={classNames("relative w-full", className)}>
      <textarea
        id="message"
        className={classNames(
          "w-full p-16 border-transparent outline-none body1 bg-netural rounded-5 text-primary placeholder:caption1 placeholder:tracking-normal border-1 focus:border-netural-dark",
          textareaClassName,
          {
            ["pr-40"]: value ? !!value : !!inValue,
          }
        )}
        value={value ?? inValue}
        onChange={onChange ? onChange : (ev) => setInValue(ev.target.value)}
        {...other}
      />

      {value ?? inValue ? (
        <InputAdornment className="right-0 pr-8 -mt-8">
          <Button
            color="inherit"
            onClick={onClear ? onClear : () => setInValue("")}
          >
            <Icon name="close-round-fill" />
          </Button>
        </InputAdornment>
      ) : null}
    </div>
  );
};

export default Textarea;
