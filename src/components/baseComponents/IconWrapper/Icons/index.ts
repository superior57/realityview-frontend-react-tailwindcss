// icons
import IconAlert from './list/IconAlert';
import IconArrowBackward from './list/IconArrowBackward';
import IconArrowBackwardMultiple from './list/IconArrowBackwardMultiple';
import IconArrowForward from './list/IconArrowForward';
import IconArrowForwardMultiple from './list/IconArrowForwardMultiple';
import IconArrowTopBottom from './list/IconArrowTopBottom';
import IconCalendar from './list/IconCalendar';
import IconClose from './list/IconClose';
import IconCloseRoundFill from './list/IconCloseRoundFill';
import IconEye from './list/IconEye';
import IconMoney from './list/IconMoney';
import IconSearch from './list/IconSearch';

// ----------------------------------------------------------------------
export type IconType =
  | 'arrow-top-bottom'
  | 'eye'
  | 'money'
  | 'search'
  | 'close'
  | 'close-round-fill'
  | 'arrow-backward'
  | 'arrow-backward-multiple'
  | 'arrow-forward'
  | 'arrow-forward-multiple'
  | 'calendar'
  | 'alert';

export const IconList = {
  'arrow-top-bottom': IconArrowTopBottom,
  'close-round-fill': IconCloseRoundFill,
  'arrow-backward': IconArrowBackward,
  'arrow-backward-multiple': IconArrowBackwardMultiple,
  'arrow-forward': IconArrowForward,
  'arrow-forward-multiple': IconArrowForwardMultiple,
  eye: IconEye,
  money: IconMoney,
  search: IconSearch,
  close: IconClose,
  calendar: IconCalendar,
  alert: IconAlert,
};
