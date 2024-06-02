import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import NavBar from './components/navbar'
import Flashcard from './pages/Newcard'
import Practice from './pages/Practice'

function App() {


  return (
    <>
      <NavBar />
      <Practice />
      </>  
    
  )
}

export default App
