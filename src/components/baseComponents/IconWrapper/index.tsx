import classNames from "classnames";
// types
import type { IconType } from "./Icons";
import { iconList } from "./Icons";
// ----------------------------------------------------------------------
type Props = {
  name: IconType;
  className?: string;
};

const IconWrapper = ({ name, className }: Props) => {

  return (
    <div
      className={classNames(
        "h-24 w-24 flex items-center justify-center",
        className
      )}
    >
      {iconList[name]}
    </div>
  );
};

export default IconWrapper;
