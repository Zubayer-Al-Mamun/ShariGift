import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/cart/Cart.jsx";
import PremiumComb from "./components/premiumComb/PremiumComb.jsx";
import Shari from "./components/shari/Shari.jsx";
import StudentComb from "./components/studentComb/StudentComb.jsx";
import "./index.css";
import Page from "./components/Page.jsx";
import Home from "./components/home/Home.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Page/>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/shari",
                element: <Shari />,
            },
            {
                path: "/premium_comb",
                element: <PremiumComb />,
            },
            {
                path: "/student_comb",
                element: <StudentComb />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
