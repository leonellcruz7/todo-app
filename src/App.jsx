import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { BiMenuAltLeft } from 'react-icons/bi'
import { BsCalendarCheck } from 'react-icons/bs'
import { FaRegStar } from 'react-icons/fa'
import { BiArchive } from 'react-icons/bi'
import './App.css'
import All from './Components/All'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import Priority from './Components/Priority'
import Archive from './Components/Archive'
import UserContext from './Components/UserContext'
import Logout from './Components/Logout'

export default function App() {
  const [user, setUser] = useState({
    firstName: localStorage.getItem('firstName'),
    lastname: localStorage.getItem('lastName'),
    email: localStorage.getItem('email'),
    userId: localStorage.getItem('userId'),
    token: localStorage.getItem('token')
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="app">
          <div className="all">
            <div className="menu">
              <Navbar />
            </div>
            <div className="contentarea">

              <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<All />} />
                <Route path='/priority' element={<Priority />} />
                <Route path='/archive' element={<Archive />} />
                <Route path='/logout' element={<Logout />} />
              </Routes>

            </div>
          </div>
        </div>
      </BrowserRouter >
    </UserContext.Provider>
  )
}
