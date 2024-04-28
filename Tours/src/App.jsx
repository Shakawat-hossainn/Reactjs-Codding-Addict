import { useState,useEffect } from 'react'
import Loading from './components/Loading'
import './App.css'
import Tours from './components/Tours'
const url =" https://course-api.com/react-tours-project"

function App() {
  const [loading, setLoading] = useState(true)
  const [tours,setTours] = useState([])

 const fetchTours=async() => {
  setLoading(true)
 let data = await fetch(url)
 let results = await data.json()

 setLoading(false)
 setTours(results)

    
  }
 useEffect(() => {
  fetchTours();
 
  
 }, [])
 if (loading) {
  return(
    <main>
      <Loading/>
    </main>
  )
 }
 

  return (
    <>
<Tours tours={tours}/>

    </>
  )
}

export default App
