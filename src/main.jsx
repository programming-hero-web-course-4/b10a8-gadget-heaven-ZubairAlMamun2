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
import Details from './assets/components/Details';
import Categorydata from './assets/components/Categorydata';
import Contact from './assets/components/Contact';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch('../category.json'),
        children:[
          {path: "",
            element: <Categorydata />,
            loader:()=>fetch("../data.json"),
          },
          {path: "/:category",
            element: <Categorydata />,
            loader:()=>fetch("../data.json"),
          },
        ],
      },
      {
        path: "statiscits",
        element: <Statistics />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/detail/:product_Id",
        loader:()=>fetch("../data.json"),
        element: <Details />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
