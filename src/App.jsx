import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ChartLine from './components/Line/ChartLine'

function App() {


  return (
    <>
      
      <h1 className='text-3xl text-red-50'>Vite + React</h1>
     {/* daisiui state */}
     <Navbar></Navbar>
     <ChartLine></ChartLine>
    </>
  )
}

export default App
