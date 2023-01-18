import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Container from '@mui/material/Container';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Client from './pages/Client'
import Dashboard from './pages/Admin/Dashboard'
import Add from './pages/Admin/Add'
import Suppliers from './pages/Admin/Suppliers'
import Details from './pages/Admin/Details'
import Edit from './pages/Admin/edit/Edit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
  },
  {
    path: "admin",
    element: <Dashboard />,
    children: [
      {
        path: "add",
        element: <Add />,
      }, 
      {
        path: "suppliers",
        element: <Suppliers/>,
      },
      {
        path: "suppliers/:supId",
        element: <Details/>
      },
      {
        path: "edit/:supId",
        element: <Edit/>
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container maxWidth="lg">
    <RouterProvider router={router} />
  </Container>
);

