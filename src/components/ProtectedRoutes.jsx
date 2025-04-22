import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Firebase/Context/Auth";

const ProtectedRoutes = () => {
    const {user} = useAuth();

    return user ? <Outlet/> : <Navigate to="/authpage" />;
    

}
 
export default ProtectedRoutes;