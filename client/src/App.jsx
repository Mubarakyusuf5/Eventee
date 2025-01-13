import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/auth/Login'
import { Signup } from './pages/auth/Signup'
import { AdminDash } from './pages/admin/AdminDash'
import { OrganzerDash } from './pages/organizer/OrganzerDash'
import { AttendeePage } from './pages/attendee/AttendeePage'
import { Navbar } from './components/Navbar'
import { Toaster } from "react-hot-toast";
import { CompleteDetailsPage } from './CompleteDetailsPage'
import axios from "axios";
import { ManageEvent } from './pages/organizer/ManageEvent'
axios.defaults.baseURL = "http://localhost:4500";
axios.defaults.withCredentials = true;

export const App = () => {
  const location = useLocation();
  const isSignInPage = location.pathname === "/auth/login";
  const isSignupPage = location.pathname === "/auth/create-account";
  const DetailsPage = location.pathname === "/completeDetails";
  return (
    <div>
      <Toaster position='top-center' duration={3000} />
      {!isSignInPage && !isSignupPage && !DetailsPage && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/create-account' element={<Signup />} />

        <Route path='/CompleteDetails' element={<CompleteDetailsPage />} />

        <Route path='/admin/dashboard' element={<AdminDash />} />

        <Route path='/organizer/dashboard' element={<OrganzerDash />} />
        <Route path='/organizer/manageEvent' element={<ManageEvent />} />

        <Route path='/dashboard' element={<AttendeePage />} />

        <Route path='*' element={<h1>404 - Page Not Found</h1>} />
        <Route path='/unauthorized' element={<h1>Unauthorized</h1>} />
      </Routes>
    </div>
  )
}
