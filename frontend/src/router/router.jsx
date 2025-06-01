import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import MenuPage from "../pages/menu/AllMenu";
import FoodGallery from "../pages/gallary/Galary";
import AboutUs from "../pages/about/About";
import React from "react";
import Contact from "../pages/contact/Contact";
React.lazy(() => import("../pages/about/About"));
React.lazy(() => import("../pages/contact/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error Page</div>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/gallary",
        element: <FoodGallery />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
