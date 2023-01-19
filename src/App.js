import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import DashBoard from './components/DashBoard'
import Logout from './components/Logout'
import Page from './components/Page'
import Pblog from './components/Pblog'
import Contact from './components/Contact'
import Admin from './components/Admin'
import Viewb from './components/Viewb'
import Search from './components/Search'
import AdminDashboard from './components/AdminDashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
    <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route exact path="/logout" element={<Logout /> } />
          <Route exact path="*" element={<Page />} />
          <Route exact path="/postblog" element={<Pblog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/admindash" element={<AdminDashboard />} />
          <Route exact path="/viewblog/:id" element={<Viewb />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
