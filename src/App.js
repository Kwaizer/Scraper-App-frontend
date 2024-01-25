import React from 'react';
import {  createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from "./components/Layout/Layout"
import Jobs from './pages/Jobs';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // your custom routing error component
      //errorElement: <Page404 />,
      // child route components
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // other pages....
        {
          path: "/jobs",
          element: <Jobs />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App;
