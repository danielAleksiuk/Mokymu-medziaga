import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";
import { AuthContext } from "../contexts/AuthContextProvider";
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
    const { theme } = useContext(ThemeContext);
    const authContext = useContext(AuthContext);
    const themeColors = theme.isLightTheme ? theme.light : theme.dark;

    console.log(theme)
    console.log(authContext);

    const generateID  = () => {
        console.log(
            uuidv4()
        )
    }

    return (
        <nav style={{backgroundColor: themeColors.ui, color: themeColors.syntax}}>
            <h2>Context app</h2>
            <button onClick={generateID}>generate ID</button>
            <button onClick={authContext.toggleAuth}>
                { authContext.auth.isAuthenticated ? 'logged in' : "logged out"}
            </button>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contacts</li>
            </ul>
        </nav>
    )
}

export default Navbar;