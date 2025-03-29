import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Info from './pages/info'
import Transfer from './pages/transfer'




export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/dashboard/info' element={<Info/>}/>
            <Route path='/dashboard/transfer' element={<Transfer/>}/>
           
        </Routes>
    </BrowserRouter>
  )
}