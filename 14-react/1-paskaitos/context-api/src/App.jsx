import Books from "./components/Books"
import Navbar from "./components/Navbar"
import ThemeToggle from "./components/ThemeToggle"
import ThemeContextProvider from "./contexts/ThemeContextProvider"

function App() {

  return (
    <>
      <ThemeContextProvider>
        <Navbar/>
        <Books/>
        <ThemeToggle/>
      </ThemeContextProvider>
      
    </>
  )
}

export default App
