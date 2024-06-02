import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import NavBar from './components/navbar'
import Flashcard from './pages/Newcard'

function App() {


  return (
    <>
      <NavBar />
      <Flashcard />
      </>  
    
  )
}

export default App
