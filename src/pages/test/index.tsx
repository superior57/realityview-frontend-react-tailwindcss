import { useState } from 'react';
import AutoComplete from '@/components/baseComponents/AutoComplete';
import Button from '@/components/baseComponents/Button';
import Icon from '@/components/baseComponents/IconWrapper';
import Select from '@/components/baseComponents/Select';
import TextField from '@/components/baseComponents/TextField';
import Typography from '@/components/baseComponents/Typography';
import { DatePicker } from '@/components/baseComponents/DatePickers';
import Textarea from '@/components/baseComponents/Textarea';

// ----------------------------------------------------------------------

const Test = () => {
  const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);

  return (
    <div>
      <Typography variant="h1">Test components</Typography>

      <div className="grid grid-cols-12 gap-8 px-16 pt-30 md:px-30">
        <div className="flex flex-col col-span-2 gap-8">
          <Typography variant="h2" className="mb-30">
            Typograpy
          </Typography>

          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h1">Heading 1</Typography>
        </div>

        <div className="flex flex-col col-span-2 gap-8">
          <Typography variant="h2" className="mb-30">
            Button
          </Typography>

          <Button>Hello</Button>
        </div>

        <div className="flex flex-col col-span-4 gap-8">
          <Typography variant="h2" className="mb-30">
            Forms
          </Typography>

          <TextField placeholder="Placeholder" />
          <TextField placeholder="Password" type="password" />
          <TextField
            placeholder="Placeholder"
            type="number"
            startAdornment={<Icon name="money" className="w-auto" />}
            startAdornmentType="fill"
          />

          <Select
            options={[
              { value: '1', label: 'test1' },
              { value: '2', label: 'test2' },
            ]}
          />
          <Select
            options={[
              { value: '1', label: 'test1' },
              { value: '2', label: 'test2' },
            ]}
            isMulti
          />

          <AutoComplete
            options={people}
            value={data}
            onChange={(value) => setData(value)}
            filterKey="name"
            placeholder="Search..."
            onClear={() => setData(null)}
          />

          <Textarea placeholder="Description" rows={5} />

          <DatePicker />
        </div>
      </div>
    </div>
  );
};

export default Test;
