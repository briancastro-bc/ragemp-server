import { 
  RouteObject,
  createHashRouter,
} from 'react-router-dom';

import RootLayout from '@apps/Shared/Layout/RootLayout';
// import ErrorLayout from '@Layout/ErrorLayout';
// import NotFoundLayout from '@Layout/NotFoundLayout';

const routes: Array<RouteObject> = [
  {
    id: 'root',
    path: '',
    element: <RootLayout/>,
    // element: <ErrorLayout/>,
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
        lazy: () => import('./Login/pages/Login')
          .then(module => ({ Component: module.default, })),
      },
    ]
  },
  {
    id: '404',
    path: '*',
    element: <p>No encontrado</p>
    // element: <NotFoundLayout/>
  }
];

// const router = createBrowserRouter(routes);
const router = createHashRouter(routes);

export default router;