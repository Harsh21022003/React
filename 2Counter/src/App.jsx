import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //values not updated so we have to use useState hook for ui update
  let [val,setVal] = useState(0);
  const inc = () => {
     setVal(val+1);
  }
  const dec = () => {
     setVal(val-1);
    }
    return (
      <>
     <h1>react and vite</h1>
     <h2>Counter : {val}</h2> 
     <button onClick={inc}>increase value</button>
     <br />
     <br />
     <button onClick={dec}>decrease value</button>

    </>
  )
}

export default App
