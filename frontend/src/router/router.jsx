import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import MenuPage from "../pages/menu/AllMenu";
import FoodGallery from "../pages/gallary/Galary";

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
    ],
  },
]);

export default router;
