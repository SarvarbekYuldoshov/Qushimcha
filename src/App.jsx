import { useState } from 'react'
import './index.css'
import Login from './Components/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
        <Login/>
    </div>
    </>
  )
}

export default App
