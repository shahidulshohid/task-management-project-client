import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useAuth()
    if(loading){
        return <h1>Loading..............</h1>
    }
    
    if(user){
        return children
    }
    return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
};

export default PrivateRoute;