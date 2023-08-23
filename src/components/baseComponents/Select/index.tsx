import ReactSelect, { ActionMeta } from "react-select";
import classNames from "classnames";
// styles
import styles from "./styles.module.scss";
import Icon from "../Icon";

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
        control: () => styles.control,
        singleValue: () => styles.singleValue,
        valueContainer: () => styles.valueContainer,
        placeholder: () => styles.placeholder,
        option: (state) =>
          classNames(styles.option, {
            [styles.focusedOption]: state.isFocused,
            [styles.selectedOption]: state.isSelected,
          }),
        menu: () => styles.menu,
        indicatorSeparator: () => "hidden",
        indicatorsContainer: () => "pr-8",
        multiValue: () => styles.multiValue,
        multiValueLabel: () => styles.multiValueLabel,
        multiValueRemove: () => styles.multiValueRemove,
      }}
      components={{
        DropdownIndicator: () => <Icon name="arrow-top-bottom" />,
      }}
      {...other}
    />
  );
};

export default Select;
