import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const Navbar = () => {
    const { theme } = useContext(ThemeContext);
    const themeColors = theme.isLightTheme ? theme.light : theme.dark;

    console.log(theme)

    return (
        <nav style={{backgroundColor: themeColors.ui, color: themeColors.syntax}}>
            <h2>Context app</h2>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contacts</li>
            </ul>
        </nav>
    )
}

export default Navbar;