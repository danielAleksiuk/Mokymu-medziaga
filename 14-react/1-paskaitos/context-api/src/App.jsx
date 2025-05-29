import Books from "./components/Books"
import Navbar from "./components/Navbar"
import ThemeToggle from "./components/ThemeToggle"
import AuthContextProvider from "./contexts/AuthContextProvider"
import ThemeContextProvider from "./contexts/ThemeContextProvider"

function App() {

  return (
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
          <Books/>
          <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvider>
      
    </>
  )
}

export default App
