import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bgchange from './Components/Bgchange'

function App() {
    const [color,setColor] = useState("olive");
  
  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap  w-full h-screen justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500' onClick={()=>setColor("red")} style={{backGroundColor:"red"} }>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500' style={{backGroundColor:"green"} } onClick={()=>setColor("green")}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500' style={{backGroundColor:"blue"} }onClick={()=>setColor("blue")}>Blue</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-500' style={{backGroundColor:"gray"} } onClick={()=>setColor("gray")}>Gray</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-500' style={{backGroundColor:"yellow"} } onClick={()=>setColor("yellow")}>Yellow</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-500' style={{backGroundColor:"pink"} } onClick={()=>setColor("pink")}>Pink</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-500' style={{backGroundColor:"purple"} } onClick={()=>setColor("purple")}>Purple</button>
        <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white' style={{backGroundColor:"white"} } onClick={()=>setColor("white")}>White</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black' style={{backGroundColor:"black"} } onClick={()=>setColor("black")}>Black</button>
        </div>
      </div>
      </div>
  )
}

export default App
