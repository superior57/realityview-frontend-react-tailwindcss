import classNames from "classnames";
// types
import { IconType } from "./types";
// icons
import IconArrowTopBottom from "./list/IconArrowTopBottom";
import IconEye from "./list/IconEye";
import IconMoney from "./list/IconMoney";
import IconSearch from "./list/IconSearch";

// ----------------------------------------------------------------------
type Props = {
  name: IconType;
  className?: string;
};

const Icon = ({ name, className }: Props) => {
  const iconList = {
    "arrow-top-bottom": <IconArrowTopBottom />,
    eye: <IconEye />,
    money: <IconMoney />,
    search: <IconSearch />,
  };

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

export default Icon;
