import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({
        email: '',
        token: ''
    });

    useEffect(() => {
        const userData = 
            localStorage.getItem('user')
            ?  JSON.parse(localStorage.getItem('user'))
            : null;

        if (userData) {
            console.log(userData)
            setUser(userData);
        }
    }, [])

    
    return  (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}