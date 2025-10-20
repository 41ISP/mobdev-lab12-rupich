import { createBrowserRouter } from "react-router-dom"
import Serch from "../pages/Serch/Serch";
import CityDetails from "../pages/CityDetails/CityDetails";
export const router = createBrowserRouter([

    {
        path: "/",
        element: <Serch />
    },
    {
        path: "/weather/:city",
        element: <CityDetails />
    }
]
)
export default router