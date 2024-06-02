import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import NavBar from './components/navbar'

function App() {


  return (
    <>
      <NavBar />
      <Home />
      </>  
    
  )
}

export default App
