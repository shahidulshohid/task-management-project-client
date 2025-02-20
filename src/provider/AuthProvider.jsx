import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged} from "firebase/auth"

export const authContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const gitHubProvider = new GithubAuthProvider()
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    // signIn with Google 
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        loading,
        signInWithGoogle,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;

