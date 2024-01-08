import { useState } from 'react'
import Main from './components/main/index.jsx'
import { BrowserRouter,  } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Main/>
</BrowserRouter>
  
    </>
  )
}

export default App
