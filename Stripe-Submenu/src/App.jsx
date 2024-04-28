import { useState } from 'react'

import './App.css'

import Navbar from './componentns/Navbar'
import Hero from './componentns/Hero'
import Sidebar from './componentns/Sidebar'
import Submenu from './componentns/Submenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
      <Hero/>
      <Sidebar/>
      <Submenu/>

    </>
  )
}

export default App
