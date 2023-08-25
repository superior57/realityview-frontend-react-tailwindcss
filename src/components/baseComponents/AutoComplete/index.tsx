import { Fragment, useState } from 'react';
import classNames from 'classnames';
// @headlessui
import { Combobox, Transition } from '@headlessui/react';
// icon
import Icon from '../IconWrapper';
// components
import TextField from '../TextField';
import Typography from '../Typography';
import Button from '../Button';
// utils
import { splitTextByQuery } from '@/shared/services/utils';

// ----------------------------------------------------------------------
type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: Array<any>;
  filterKey: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (value: any) => void;
  onClear?: VoidFunction;
};

const AutoComplete = ({
  options = [],
  value,
  filterKey,
  placeholder,
  onChange,
  onClear,
}: Props) => {
  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option[filterKey]
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="relative">
      <Combobox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative">
            <Combobox.Input
              as={TextField}
              startAdornment={<Icon name="search" />}
              inputClassName="aria-expanded:rounded-b-none"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              displayValue={(option: any) => option?.[filterKey]}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
              {...(open
                ? {
                    endAdornment: (
                      <Button color="inherit" onClick={onClear}>
                        <Icon name="close" />
                      </Button>
                    ),
                  }
                : null)}
            />

            <Transition
              as={Fragment}
              leave="transition-all ease-in duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options className="absolute z-10 w-full py-8 overflow-auto transition-opacity bg-white max-h-60 rounded-b-5 border-1 border-netural-dark border-t-netural">
                {filteredOptions.length === 0 && query !== '' ? (
                  <Typography variant="body2" className="px-16">
                    Nothing found.
                  </Typography>
                ) : (
                  filteredOptions.map((option) => (
                    <Combobox.Option
                      key={option.id}
                      className={({ active }) =>
                        classNames(
                          'relative flex cursor-default select-none py-8 px-16 pr-4 hover:bg-neutral-100',
                          {
                            ['bg-netural']: active,
                          }
                        )
                      }
                      value={option}
                    >
                      <Typography
                        variant="body2"
                        className="whitespace-pre"
                        color="secondary"
                      >
                        {splitTextByQuery(option[filterKey], query)[0]}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="block truncate whitespace-pre"
                      >
                        {splitTextByQuery(option[filterKey], query)[1]}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="whitespace-pre"
                        color="secondary"
                      >
                        {splitTextByQuery(option[filterKey], query)[2]}
                      </Typography>
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        )}
      </Combobox>
    </div>
  );
};

export default AutoComplete;
