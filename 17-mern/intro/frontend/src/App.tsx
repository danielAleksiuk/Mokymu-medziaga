import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import CreateTask from './pages/CreateTask'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

const PrivateRoutes = () => {
  // const {user} = useContext(AuthContext);
  const user = localStorage.getItem('user')

  return (
    user ? <Outlet/> : <Navigate to='/login'/>
  )
}

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route element={<PrivateRoutes/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/newPratimas' element={<CreateTask/>}/>
            </Route>
    
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App

