import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingPage from "../pages/LoadingPage/LoadingPage";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useAuth()
    if(loading){
        return <LoadingPage></LoadingPage>
    }
    
    if(user){
        return children
    }
    return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
};

export default PrivateRoute;