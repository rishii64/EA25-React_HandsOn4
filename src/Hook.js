import React from 'react'
import Home from "./Home"
import Student from "./Student"
import Contact from "./Contact"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import DynamicRoute from './DynamicRoute'
import StuContact from './StuContact'

export default function Hook() {
  return (
    <div>
        <BrowserRouter>
          <div id='links'>
              <Link id='linkHead' to='/'>Home</Link>
              <Link id='linkHead' to='/student'>Student</Link>
              <Link id='linkHead' to='/contact'>Contact Us</Link>
          </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/student' element={<Student />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/StuContact' element={<StuContact />} />
                <Route path='/student/:id' element={<DynamicRoute />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

