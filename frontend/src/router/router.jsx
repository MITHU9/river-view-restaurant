import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import MenuPage from "../pages/menu/AllMenu";
import AboutUs from "../pages/about/About";
import React from "react";
import Contact from "../pages/contact/Contact";
import FoodGallery from "../pages/gallary/Gallery";
import Dashboard from "../layout/Dashboard";
import AdminDashboard from "../pages/admin/home/Home";
import FoodAddForm from "../pages/admin/addFood/FoodAddForm";
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
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <div>Error Page</div>,

    children: [
      {
        path: "/dashboard/overview",
        element: <AdminDashboard />,
      },
      {
        path: "/dashboard/add-food",
        element: <FoodAddForm />,
      },
    ],
  },
]);

export default router;
