import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../layouts/MasterLayout";
import Home from "../pages/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
        {
            path: "/",
            element: <Home/>
        }
    ]
  }
])