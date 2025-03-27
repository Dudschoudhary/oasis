import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../layouts/MasterLayout";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
        {
            path: "/",
            
        }
    ]
  }
])