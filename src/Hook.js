import React from 'react'
import Home from "./Home"
import Student from "./Student"
import Contact from "./Contact"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

export default function Hook() {
  return (
    <div >
        <BrowserRouter>
          <div id='links'>
              <Link id='linkHead' to='/'>Home</Link>
              <Link id='linkHead' to='/student'>Student</Link>
              <Link id='linkHead' to='/contact'>Contact Us</Link>
          </div>
            {/* <h1>Route Component Page</h1> */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/student' element={<Student />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

