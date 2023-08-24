import { Fragment, useState } from "react";
import classNames from "classnames";
// @headlessui
import { Combobox, Transition } from "@headlessui/react";
// icon
import Icon from "../IconWrapper";
// components
import TextField from "../TextField";
import Typography from "../Typography";
import { splitTextByQuery } from "@/shared/services/utils";

// ----------------------------------------------------------------------
const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

const AutoComplete = () => {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="relative">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative">
          <Combobox.Input
            as={TextField}
            startAdornment={<Icon name="search" />}
            inputClassName="aria-expanded:rounded-b-none"
            displayValue={(person: { name: string }) => person.name}
            onChange={(event) => setQuery(event.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition-all ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute w-full py-8 overflow-auto transition-opacity max-h-60 rounded-b-5 border-1 border-netural-dark border-t-netural">
              {filteredPeople.length === 0 && query !== "" ? (
                <Typography variant="body2" className="px-16">
                  Nothing found.
                </Typography>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        "relative flex cursor-default select-none py-8 px-16 pr-4 hover:bg-neutral-100",
                        {
                          ["bg-netural"]: active,
                        }
                      )
                    }
                    value={person}
                  >
                    <Typography
                      variant="body2"
                      className="whitespace-pre"
                      color="secondary"
                    >
                      {splitTextByQuery(person.name, query)[0]}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="block truncate whitespace-pre"
                    >
                      {splitTextByQuery(person.name, query)[1]}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="whitespace-pre"
                      color="secondary"
                    >
                      {splitTextByQuery(person.name, query)[2]}
                    </Typography>
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default AutoComplete;
