import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  // useLocation,
} from "react-router-dom";

import { useEffect } from "react";
import { Home } from "./pages";

const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // {
      //   path: "*",
      //   element: <NotFound/>
      // },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  useEffect(() => {
    // scroll()
  }, []);

  return <RouterProvider router={router} />;
}
