import { SyntheticEvent, useState } from 'react';
import ReactDatePicker, {
  ReactDatePickerCustomHeaderProps,
} from 'react-datepicker';
import { format } from 'date-fns';
import classNames from 'classnames';
// components
import TextField from '../TextField';
import { Button } from '../Button';
import Icon from '../IconWrapper';

// ----------------------------------------------------------------------
type Props = {
  className?: string;
  value?: Date | null;
  placeholder?: string;
  format?: string;
  onChange?: (
    date: Date | null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event: SyntheticEvent<any, Event> | undefined
  ) => void;
};

const DatePicker = ({
  className,
  value,
  placeholder,
  format = 'MM/dd/yyyy',
  onChange,
}: Props) => {
  const [inValue, setInValue] = useState<Date | null>(null);

  return (
    <>
      <ReactDatePicker
        wrapperClassName={classNames('w-full', className)}
        selected={value ?? inValue}
        onChange={onChange ? onChange : (date) => setInValue(date)}
        customInput={<TextField endAdornment={<Icon name="calendar" />} />}
        showPopperArrow={false}
        todayButton="Today"
        renderCustomHeader={CustomDatePickerHeader}
        formatWeekDay={(day) => day.substring(0, 3)}
        placeholderText={placeholder ?? format.toLowerCase()}
        dateFormat={format}
      ></ReactDatePicker>
    </>
  );
};

const CustomDatePickerHeader = ({
  date,
  decreaseMonth,
  decreaseYear,
  increaseMonth,
  increaseYear,
}: ReactDatePickerCustomHeaderProps) => {
  return (
    <div className="flex items-center gap-5 pb-8">
      <Button color="inherit" className="w-24 h-24" onClick={decreaseYear}>
        <Icon name="arrow-backward-multiple" />
      </Button>
      <Button color="inherit" className="w-24 h-24" onClick={decreaseMonth}>
        <Icon name="arrow-backward" />
      </Button>

      <div className="flex-1" />

      <div className="current-date-label">{format(date, 'MMMM, yyyy')}</div>

      <div className="flex-1" />

      <Button color="inherit" className="w-24 h-24" onClick={increaseMonth}>
        <Icon name="arrow-forward" />
      </Button>
      <Button color="inherit" className="w-24 h-24" onClick={increaseYear}>
        <Icon name="arrow-forward-multiple" />
      </Button>
    </div>
  );
};

export default DatePicker;
