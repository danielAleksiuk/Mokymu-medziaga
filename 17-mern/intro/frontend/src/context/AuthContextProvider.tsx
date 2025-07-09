import { useState } from "react"
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({
        email: '',
        token: ''
    });
    const [isUserAuth, setIsUserAuth] = useState<boolean>(false);
    
    return  (
        <AuthContext.Provider value={{user, isUserAuth}}>
            {children}
        </AuthContext.Provider>
    )
}