import { lazy } from 'react';

import { Outlet } from 'react-router-dom';
import { Loadable } from '../components/Loadable';

const DashboardDefault = Loadable(lazy(() => import('views/dashboard/DashboardDefault')));
const DashboardUtils = Loadable(lazy(() => import('views/dashboard/DashboardUtils')));

export const MainRoutes = {
    path: '/',
    element: <Outlet />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            element: <DashboardDefault />
        },
        {
            path: 'utils',
            element: <DashboardUtils />
        }
    ]
};