import App from "../../App";
import Home from "../Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Brands from "../Brands/Brands";

 const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>
    },
    {
        path: "/home",
        element: <Home/>,
    },
    {
        path: "/brands",
        element: <Brands/>,
    }
 ])
 export default router