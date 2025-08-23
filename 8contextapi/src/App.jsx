import { useState } from 'react'

import UserContextprovider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContextprovider>
        <h1>React</h1>
        <Login/>
        <Profile/>
      </UserContextprovider>
    </>
  )
}

export default App
