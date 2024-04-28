import { useState } from 'react'

import './App.css'
import Catagories from './components/Catagories'
import Menu from './Menu'
import data from './data'
const allCategories =['all', ...new Set(data.map((item)=>item.category))]



  

function App() {
  const [menuItems, setMenuItems] = useState(data)
  const [catagories, setCatagories] = useState(allCategories)
  const filterItems = (category)=>{
   if (category==="all") {
    setMenuItems(data)
    return;
    
   }
   
   const newItems = data.filter((item)=>item.category===category)
   setMenuItems(newItems)
  }

  

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Catagories catagories={catagories} filterItems={filterItems}/>
          <Menu data={menuItems}  />

        </section>
      </main>
    </>
  )
}

export default App
