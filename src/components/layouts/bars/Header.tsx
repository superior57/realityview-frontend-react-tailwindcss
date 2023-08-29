import { Button, Notification } from '@/components/baseComponents/Button';
import Container from '@/components/baseComponents/Container';
import Icon from '@/components/baseComponents/IconWrapper';
import AccountPopover from '@/components/mainComponents/AccountPopover';
import SearchField from '@/components/mainComponents/SearchField';
import { LAYOUTS } from '@/shared/config/constants';

const Header = () => {
  const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
  ];

  return (
    <>
      <header
        className="flex border-b-1 border-b-divider"
        style={{ height: LAYOUTS.HEADER_HEIGHT }}
      >
        <Container className="flex my-5">
          <div className="flex gap-10">
            <Button variant="icon" color="inherit" className="">
              <Icon name="menu" />
            </Button>

            <SearchField options={people} filterKey="name" />
          </div>

          <div className="flex-1" />

          <div className="flex gap-4">
            <Notification label={5} />
            <AccountPopover />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
