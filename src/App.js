import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Body from "./components/Body";
import RestroMenu from "./components/RestroMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Contact from "./components/Contact";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
}

const appRouter = createBrowserRouter([
{
    path: "/",
    element: <AppLayout />,
    children: [
        {
            path: "/",
            element: <Body />,
        },

        {
            path: "/about",
            element: <About />,
        },

        {
            path: "/contact",
            element: <Contact />,
        },

        {
            path: "/restro/:resId",
            element: <RestroMenu />
        }
    ],

    errorElement: <Error />
}]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);