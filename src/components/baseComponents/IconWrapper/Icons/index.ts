// icons
import IconArrowTopBottom from "./list/IconArrowTopBottom";
import IconClose from "./list/IconClose";
import IconCloseRoundFill from "./list/IconCloseRoundFill";
import IconEye from "./list/IconEye";
import IconMoney from "./list/IconMoney";
import IconSearch from "./list/IconSearch";

// ----------------------------------------------------------------------
export type IconType =
  | "arrow-top-bottom"
  | "eye"
  | "money"
  | "search"
  | "close"
  | "close-round-fill";

export const IconList = {
  "arrow-top-bottom": IconArrowTopBottom,
  "close-round-fill": IconCloseRoundFill,
  eye: IconEye,
  money: IconMoney,
  search: IconSearch,
  close: IconClose,
};
