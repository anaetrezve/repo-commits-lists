import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => (
  <main>
    <Outlet />
  </main>
);

export default Layout;
