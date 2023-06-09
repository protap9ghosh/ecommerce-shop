import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Layout/Home";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import cartProductsLoader from "./loaders/cartProductsLoader";
import Checkout from "./components/Checkout/Checkout";
import SingUP from "./components/SingUp/SignUP";
import AuthProvider from "./components/Providers/AuthProvider";
import PrivateRoute from "./components/Routes/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Shop></Shop>,
            },
            {
                path: "orders",
                element: <Orders></Orders>,
                loader: cartProductsLoader,
            },
            {
                path: "inventory",
                element: <PrivateRoute><Inventory></Inventory></PrivateRoute>,
            },
            {
                path: "checkout",
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "signUp",
                element: <SingUP></SingUP>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </React.StrictMode>
);
