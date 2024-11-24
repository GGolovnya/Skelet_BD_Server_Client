import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import Layout from './components/Layout';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;