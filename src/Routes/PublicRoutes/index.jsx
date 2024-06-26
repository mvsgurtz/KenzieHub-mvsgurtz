import { useContext } from "react"
import { userContext } from "../../provider/User"
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {

    const { user } =  useContext(userContext);
    return user ? <Navigate to={"/Dashboard"} /> : <Outlet/>;
}