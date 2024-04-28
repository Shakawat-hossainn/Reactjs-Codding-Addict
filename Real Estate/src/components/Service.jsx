import React from 'react'
import houseIcon from '../Images/Service/homeIcon.webp'
import sell from '../Images/Service/Selling.png'
import renting from '../Images/Service/renting.png'

const Service = () => {
  return (
    <div className='text-center mt-4'>
        <h1 className='text-[25px] text-[#596aac]'>Our Amazing</h1>
        <h1 className='text-3xl mt-1'>Service Offer</h1>

        <div className='flex justify-evenly mt-5  '>
            <div>
                <img className='h-[6rem] w-[6rem] ' src={houseIcon} alt="" />
                <p className='text-[25px]'>Buying</p>
            </div>
            <div>
                <img className='h-[6rem] w-[6rem] ' src={sell} alt="" />
                <p className='text-[25px]'>Selling</p>
            </div>
            <div>
                <img className='h-[6rem] w-[6rem]' src={renting} alt="" />
                <p className='text-[25px]'>Renting</p>
            </div>
        </div>
        <div>
            <button className=' px-4 py-2 rounded bg-green-600 mt-3'>More About Our Services</button>
        </div>
      
    </div>
  )
}

export default Service
