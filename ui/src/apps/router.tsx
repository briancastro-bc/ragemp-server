import { 
  RouteObject,
  createHashRouter,
  createBrowserRouter,
} from 'react-router-dom';

import RootLayout from '@apps/Shared/Layout/RootLayout';
// import ErrorLayout from '@Layout/ErrorLayout';
// import NotFoundLayout from '@Layout/NotFoundLayout';

const routes: Array<RouteObject> = [
  {
    id: 'root',
    path: '',
    element: <RootLayout/>,
    // errorElement: <ErrorLayout/>,
    children: [
      {
        id: 'main',
        path: '',
        element: <p>Main page</p>
      },
      {
        id: 'login',
        path: 'login',
        lazy: () => import('./Auth/pages/Login')
          .then(module => ({ Component: module.default, })),
      },
      {
        id: 'signup',
        path: 'signup',
        lazy: () => import('./Auth/pages/Signup')
          .then(module => ({ Component: module.default, })),
      },
    ],
  },
  {
    id: '404',
    path: '*',
    element: <p>No encontrado</p>
    // element: <NotFoundLayout/>
  }
];

const router = createHashRouter(routes);
// const router = createBrowserRouter(routes);

export default router;