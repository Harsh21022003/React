import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
     <h1 className='bg-amber-300 text-black rounded-4xl p-4 mb-4'>Tailwind Test</h1>
     <Card photo="OIP (2).jpg" btnText='Click here'/>
     <Card photo="OIP (1).jpg" />
    </>
  )
}

export default App
