import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { useEffect } from "react";
import { NotFound, Home } from "./pages";
import { Navbar, Footer } from "./components";

const Root = () => {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  useEffect(() => {
    scroll();
  }, []);

  return <RouterProvider router={router} />;
}
