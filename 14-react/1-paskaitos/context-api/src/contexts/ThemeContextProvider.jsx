import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(1);

const ThemeContextProvider = (props) => {
    const [state, setState] = useState({
        isLightTheme: true,
        light: {syntax: "#555", ui: "#ddd", bg: "#eee"},
        dark: {syntax: "#ddd", ui: "#333", bg: "#555"}
    });

    const toggleTheme = () => {
        setState(prev => { 
            return {
                isLightTheme: !prev.isLightTheme,
                dark: prev.dark,
                light: prev.light
        }})
    }

    return (
        <ThemeContext.Provider value={{ theme: state, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;