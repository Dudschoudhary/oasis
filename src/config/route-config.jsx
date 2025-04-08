import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../layouts/MasterLayout";
import Home from "../pages/Home";
import AdmitionOpneSection from "../pages/AdmitionOpenSection";
import Admission from "../pages/allCards/Admission";
import FeeStructure from "../pages/allCards/FeeStructure";
import Result from "../pages/allCards/Result";
import SchoolRules from "../pages/allCards/SchoolRules";
import Events from "../pages/allCards/Events";
import NewsMedia from "../pages/allCards/NewsMedia";
import Achievements from "../pages/allCards/Achievements";
import Alumni from "../pages/allCards/Alumni";
import Careers from "../pages/allCards/Careers";
import AboutSchool from "../pages/about/AboutSchool";
import DirectorMessage from "../pages/about/DirectorMessage";

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
        },
        {
          path: "/results",
          element: <Result/>
        },
        {
          path: "school-rules",
          element: <SchoolRules/>
        },
        {
          path: "events",
          element: <Events/>
        },
        {
          path: "news-media",
          element: <NewsMedia/>
        },
        {
          path: "achievements",
          element: <Achievements/>
        },
        {
          path: "alumni",
          element: <Alumni/>
        },
        {
          path: "careers",
          element: <Careers/>
        },
        {
          path: "about-school",
          element: <AboutSchool/>
        },
        {
          path: "director-message",
          element: <DirectorMessage/>
        },
    ]
  }
])