import {
    createBrowserRouter, useLocation
} from "react-router-dom";

import Layout from "../Layout/Layout";
import Work from "../pages/Work/Work";
import FirstCaseStudy from "../pages/CaseStudy/FirstCaseStudy";
import SecondCaseStudy from "../pages/CaseStudy/SecondCaseStudy";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import { useEffect } from "react";

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]);

    return null;
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <ScrollToTop />
                <Layout />

            </>
        ),
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