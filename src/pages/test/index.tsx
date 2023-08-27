import { useState } from 'react';
import AutoComplete from '@/components/baseComponents/AutoComplete';
import { Button, Notification } from '@/components/baseComponents/Button';
import Icon from '@/components/baseComponents/IconWrapper';
import Select from '@/components/baseComponents/Select';
import TextField from '@/components/baseComponents/TextField';
import Typography from '@/components/baseComponents/Typography';
import { DatePicker } from '@/components/baseComponents/DatePickers';
import Textarea from '@/components/baseComponents/Textarea';
import Checkbox from '@/components/baseComponents/Checkbox';
import Label from '@/components/baseComponents/Label';

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

      <div className="grid grid-cols-12 gap-8 px-16 my-46 md:px-30">
        <div className="flex flex-col gap-8 col-span-full sm:col-span-3 lg:col-span-2">
          <Typography variant="h2" className="mb-30">
            Typograpy
          </Typography>

          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="body1">Body 1</Typography>
          <Typography variant="body2">Body 2</Typography>
          <Typography variant="button1">Button 1</Typography>
          <Typography variant="button2">Button 2</Typography>
          <Typography variant="caption1">Caption 1</Typography>
          <Typography variant="caption2">Caption 2</Typography>
          <Typography variant="normal">Normal text</Typography>
        </div>

        <div className="flex flex-col gap-8 col-span-full sm:col-span-3">
          <Typography variant="h2" className="mb-30">
            Button
          </Typography>

          <Button>Primary button</Button>
        </div>

        <div className="flex flex-col gap-8 col-span-full lg:col-span-4">
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

        <div className="flex flex-col gap-8 col-span-full lg:col-span-4">
          <Typography variant="h2" className="mb-30">
            Checkbox and Notifications
          </Typography>

          <div className="flex items-start">
            <Checkbox defaultChecked className="mr-16" />
            <Checkbox className="mr-40" />

            <Checkbox variant="inherit" className="mr-16" inputSize="small" />
            <Checkbox
              variant="inherit"
              className="mr-40"
              defaultChecked
              inputSize="small"
            />

            <Notification className="mr-16" />
            <Notification label={10} />
          </div>
        </div>

        <div className="flex flex-col gap-8 col-span-full lg:col-span-3">
          <Typography variant="h2" className="mb-30">
            Progress
          </Typography>

          <div>
            <Label
              className="mr-16"
              color="success"
              title="ON TRACK"
              size="small"
            />
            <Label
              className="mr-16"
              color="warnning"
              title="IN DANGER"
              size="small"
            />
            <Label
              className="mr-16"
              color="danger"
              title="OFF TRACK"
              size="small"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 col-span-full lg:col-span-3">
          <Typography variant="h2" className="mb-30">
            Status
          </Typography>

          <div>
            <Label
              className="mr-16"
              color="success"
              title="Active"
            />
            <Label
              className="mr-16"
              color="danger"
              title="Inactive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
