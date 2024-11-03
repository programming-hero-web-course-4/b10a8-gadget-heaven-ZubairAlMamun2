import { createRoot } from 'react-dom/client'
import './index.css'
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './assets/components/ErrorPage';
import Home from './assets/components/Home';
import Statistics from './assets/components/Statistics';
import Dashboard from './assets/components/Dashboard';
import Root from './assets/components/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "statiscits",
        element: <Statistics />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
