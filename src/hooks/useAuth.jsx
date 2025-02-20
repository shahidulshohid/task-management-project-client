import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";


const useAuth = () => {
    const useAuth = useContext(authContext)
    return useAuth;
};

export default useAuth;