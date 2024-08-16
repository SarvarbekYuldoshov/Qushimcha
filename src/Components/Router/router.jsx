import App from "../../App";
import Home from "../Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Models from "../Models/Models";

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
        path: "/models",
        element: <Models/>,
    }
 ])
 export default router