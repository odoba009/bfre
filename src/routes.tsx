import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Info from './pages/info'




export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/info' element={<Info/>}/>
           
        </Routes>
    </BrowserRouter>
  )
}