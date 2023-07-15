import "./App.css"

import { Route, Routes } from 'react-router-dom'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"

import { AuthenticationGuard } from "./auth/AuthenticationGuard"
import { Callback } from "./pages/callback/Callback"
import Home from './pages/home/Home'
import Loading from "./components/loading/Loading"
import Navbar from "./components/navbar/Navbar"
import React from 'react'

function App() {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<AuthenticationGuard component={Home} />}/>
          <Route path="/callback" element={<Callback />} />
      </Routes>
    </>
  );
  }
  
  export default App

  // TODO:
  // 1. Update mongodb schema to include email and bio
  // 2. Change the fetchPhotoIds request param to search by email instead of username
  // 3. Grab bio from mongo
  // 4. On signup, create a document in mongodb users collection
