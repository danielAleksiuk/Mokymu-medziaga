import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [state ,  setState] = useState({isAuthenticated: false});

    const toggleAuth = () => {
        setState(prev => {return {isAuthenticated: !prev.isAuthenticated}})
    }

    return (
        <AuthContext.Provider value={{ auth: state, toggleAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

