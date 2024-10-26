import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='flex text-center'>This is the main screen for InfraSightAI</h1>
      </div>
      <p className="font-extrabold text-center flex justify-center">
        Welcome to the GEN AI platform. This is the main screen for InfraSightAI.
      </p>
    </>
  )
}

export default App
