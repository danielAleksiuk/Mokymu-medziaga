import { ThemeContext } from "../contexts/ThemeContextProvider";
import { useContext } from "react";

const ThemeToggle = () => {
    const {toggleTheme, theme} = useContext(ThemeContext);

    return (
        <>
            <button onClick={toggleTheme}>change theme</button>
            <p>dabar yra  tema : { theme.isLightTheme ? 'light' : 'dark'}</p>
        </>
        
    )
}

export default ThemeToggle;