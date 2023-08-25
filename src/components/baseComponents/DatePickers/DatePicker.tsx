import { useRef, useState } from 'react';
import ReactDatePicker, {
  ReactDatePickerCustomHeaderProps,
} from 'react-datepicker';
import TextField from '../TextField';
import Button from '../Button';
import Icon from '../IconWrapper';
import { format } from 'date-fns';

// ----------------------------------------------------------------------

const DatePicker = () => {
  const [value, setValue] = useState<Date | null>(new Date());
  const refDatepicker = useRef<ReactDatePicker>(null);

  return (
    <>
      <ReactDatePicker
        wrapperClassName="w-full"
        selected={value}
        onChange={(date) => setValue(date)}
        customInput={<TextField endAdornment={<Icon name="calendar" />} />}
        showPopperArrow={false}
        todayButton="Today"
        ref={refDatepicker}
        renderCustomHeader={CustomDatePickerHeader}
        formatWeekDay={(day) => day.substring(0, 3)}
      >
      </ReactDatePicker>
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
