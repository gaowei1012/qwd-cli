import React from 'react';
import Login from '@/pages/users/login';
import Register from '@/pages/users/register';
import Dashboard from '@/pages/dashboard';

type defaultViewRoutesType = {
  path: string;
  element: React.ReactElement | undefined;
  header: boolean;
  sider: boolean;
  footer: boolean;
};

const routes: Array<defaultViewRoutesType> = [
  {
    path: '/login',
    element: <Login />,
    header: false,
    sider: false,
    footer: false,
  },
  {
    path: '/register',
    element: <Register />,
    header: false,
    sider: false,
    footer: false,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    header: false,
    sider: false,
    footer: false,
  },
];

export default routes;
