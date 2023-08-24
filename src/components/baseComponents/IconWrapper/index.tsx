import classNames from "classnames";
// types
import { IconList, IconType } from "./Icons";

// ----------------------------------------------------------------------
type Props = {
  name: IconType;
  className?: string;
};

const Icon = ({ name, className }: Props) => {
  const IconTag = IconList[name];

  return (
    <div
      className={classNames(
        "h-24 w-24 flex items-center justify-center",
        className
      )}
    >
      <IconTag />
    </div>
  );
};

export default Icon;
