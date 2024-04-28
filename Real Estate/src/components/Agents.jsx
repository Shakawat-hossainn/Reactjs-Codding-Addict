import React from 'react'
//import person1 from '../Images/Agents/person1.jpg'
import agents from '../agentsData'
import Agent from './Agent'
const Agents = () => {

  return (
   
    <div className='mt-5 text-center bg-[#f7f7f7]'>
        <h1 className='text-[25px] text-[#596aac]'>
         Meet Our
        </h1>
        <h1 className='text-3xl mt-1'>Agents</h1>
        <div className='grid justify-center grid-cols-2 ml-28'>
            {agents.map((agent,index) => {
                const {img,title,email,Number} = agent
                return(
                    <Agent key={index} {...agent}/>
                )
              
            }
            )}
      


        </div>
      </div>
     
  )
}

export default Agents
