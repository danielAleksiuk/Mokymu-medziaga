import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout"
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/about' element={<AboutUsPage/>}/>
              <Route path='/contacts' element={<ContactsPage/>}/>
			  <Route path='*' element={<NotFoundPage/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
