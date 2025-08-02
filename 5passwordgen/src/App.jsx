import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(15);
  const [numAllowed,setNumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}|:?/\~"
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)

      
    }
    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])
  
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select() //to highlight the selected text
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,setPassword])

  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <div className='flex shadow rounded-lg overflow-hidden m-4'>

        <input type="text"
         value={password}
         className='outline-none w-full bg-white mt-2 rounded-md py-2 px-3'
         placeholder='password'
         readOnly
         ref={passwordRef}
         />
         <button
         onClick={copyPassword} 
         className='outline-none bg-blue-700 text-white mt-2 rounded-md mx-2 p-2 px-3 py-0.5 shrink-0'>copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numAllowed}
          id='numberInput'
          onChange={()=>{
            setNumAllowed((prev)=>!prev);
          }}
          />
          <label>Numbers</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id='CharInput'
          onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }}
          />
          <label>characters</label>

        </div>

      </div>
    </div>
    
    </>
  )
}

export default App
