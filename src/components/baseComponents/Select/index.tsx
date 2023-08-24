import ReactSelect, { ActionMeta } from "react-select";
import classNames from "classnames";
import Icon from "../IconWrapper";

// ----------------------------------------------------------------------
type Props = {
  options: Array<{ value: string; label: string }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  isMulti?: boolean;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (newValue: any, actionMeta: ActionMeta<any>) => void;
};

const Select = ({
  options,
  value,
  isMulti,
  placeholder = "Enter the keyword...",
  onChange,
  ...other
}: Props) => {
  return (
    <ReactSelect
      options={options}
      value={value}
      onChange={onChange}
      isMulti={isMulti}
      placeholder={placeholder}
      classNames={{
        control: () =>
          "!h-40 !font-opensans !border-none !bg-netural rounded-5 !shadow-none",
        singleValue: () => "!body1 !text-primary",
        valueContainer: () => "!px-16",
        placeholder: () => "!caption1 !text-secondary",
        option: (state) =>
          classNames(
            "!font-montserrat !text-13 !leading-18 !font-medium !text-primary !px-16",
            {
              ["!bg-neutral-50"]: state.isFocused,
              ["!bg-netural"]: state.isSelected,
            }
          ),
        menu: () => "!border-none !outline-none !py-4 !shadow-md !mt-4",
        indicatorSeparator: () => "hidden",
        indicatorsContainer: () => "pr-8",
        multiValue: () => "!bg-white !rounded-3 !m-0 !mr-5",
        multiValueLabel: () => "!caption2 !text-primary",
        multiValueRemove: () => "hover:!bg-red-100 hover:!text-red-500",
      }}
      components={{
        DropdownIndicator: () => <Icon name="arrow-top-bottom" />,
      }}
      {...other}
    />
  );
};

export default Select;
