import { Outlet } from 'react-router-dom';
import Header from './bars/Header';
import SideBar from './bars/SideBar';
import Container from '../baseComponents/Container';
const FullLayout = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default FullLayout;
