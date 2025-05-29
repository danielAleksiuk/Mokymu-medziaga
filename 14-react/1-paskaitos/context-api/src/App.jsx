import Books from "./components/Books"
import Navbar from "./components/Navbar"
import ThemeToggle from "./components/ThemeToggle"
import AuthContextProvider from "./contexts/AuthContextProvider"
import BookContextProvider from "./contexts/BookContextProvider"
import ThemeContextProvider from "./contexts/ThemeContextProvider"

function App() {

  return (
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
          <BookContextProvider>
            <Books/>
          </BookContextProvider>
          <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvider>
      
    </>
  )
}

export default App
