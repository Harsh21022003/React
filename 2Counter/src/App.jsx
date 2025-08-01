import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //values not updated so we have to use useState hook for ui update
  let [val,setVal] = useState(0);
  const inc = () => {
     val += 1;
     if(val <= 20){
      setVal(val);
     }
     else{
      val = 20;
     }
  }
  const dec = () => {
    val -= 1;
    if(val >= 0){
      setVal(val);
    }
    else{
      val = 0;
    }

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
