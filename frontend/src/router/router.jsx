import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

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
    ],
  },
]);

export default router;
