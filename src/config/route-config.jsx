import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../layouts/MasterLayout";
import Home from "../pages/Home";
import AdmitionOpneSection from "../pages/AdmitionOpenSection";
import Admission from "../pages/allCards/Admission";
import FeeStructure from "../pages/allCards/FeeStructure";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/admissions",
            element: <Admission/>
        },
        {
          path: "/fee-structure",
          element: <FeeStructure/>
        }
    ]
  }
])