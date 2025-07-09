import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import CreateTask from './pages/CreateTask'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/newPratimas' element={<CreateTask/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App

