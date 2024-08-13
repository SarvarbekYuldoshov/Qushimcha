import App from "../../App";
import Home from "../Home/Home";
import { createBrowserRouter } from "react-router-dom";

 const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>
    },
    {
        path: "/home",
        element: <Home/>,
    }
 ])
 export default router