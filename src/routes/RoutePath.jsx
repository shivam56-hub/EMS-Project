import React from 'react'
import Home from '../components/Hero/Home'
import { Route, Routes } from 'react-router-dom'
import AboutUs from '../components/about/AboutUs'
import AddEmp from '../components/addEmp/AddEmp'
import Register from '../components/register/Register'
import Login from '../components/login/Login'
import UpdateEmp from '../components/updateEmp/UpdateEmp'



export default function RoutePath() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/addEmp' element={<AddEmp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/updateEmp' element={<UpdateEmp />} />
      </Routes>
    </div>
  )
}

