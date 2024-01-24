import {
    createBrowserRouter
} from "react-router-dom";

import Layout from "../Layout/Layout";
import Work from "../pages/Work/Work";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Work />
            }
        ]
    },
]);