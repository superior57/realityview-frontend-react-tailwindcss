import { useState } from 'react';
import AutoComplete from '@/components/baseComponents/AutoComplete';

// ----------------------------------------------------------------------
type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any[];
  filterKey: string;
  placeholder?: string;
};

const SearchField = ({ options, filterKey, placeholder }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [value, setValue] = useState<any>(null);

  return (
    <AutoComplete
      options={options}
      value={value}
      onChange={(value) => setValue(value)}
      filterKey={filterKey}
      placeholder={placeholder ?? 'Search...'}
      onClear={() => setValue(null)}
    />
  );
};

export default SearchField;
