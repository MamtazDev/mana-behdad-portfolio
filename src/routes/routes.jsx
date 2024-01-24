import {
    createBrowserRouter
} from "react-router-dom";

import Layout from "../Layout/Layout";
import Work from "../pages/Work/Work";
import FirstCaseStudy from "../pages/CaseStudy/FirstCaseStudy";
import SecondCaseStudy from "../pages/CaseStudy/SecondCaseStudy";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Work />
            },
            {
                path: '/work',
                element: <Work />
            },
            {
                path: '/firstCaseStudy',
                element: <FirstCaseStudy />
            },
            {
                path: '/secondCaseStudy',
                element: <SecondCaseStudy />
            },
            {
                path: '/about',
                element: <About />
            }
            ,
            {
                path: '/skills',
                element: <Skills />
            }
        ]
    },
]);