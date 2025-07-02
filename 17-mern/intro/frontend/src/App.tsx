import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import CreateTask from './pages/CreateTask'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/newPratimas' element={<CreateTask/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App


// 1. sukurti forma 
//   title
//   reps
//   lygis

// 2. paspaudus mygtuka save 
//   siusti POST uzklausa 

// 3. jei uzklausa yra sekminga 
//   pereiti i home puslapi

// 4. jei uzklausa nesekminga
//   parodyti klaida - raudonomis raidemis
