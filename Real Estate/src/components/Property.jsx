import React from 'react'
import bedImg from '../Images/bed.svg';
import bathImg from '../Images/bath.svg';
import areaImg from '../Images/area.svg';
//import img from '../Images/Cards/house1.jpg'

const Property = ({title,date,bed,bath,area,price,img}) => {
  return (
    <div className="cards ml-[9rem] mt-[9rem] ">
        <div className="card w-[22rem]">
          <img src={img} className="card-img-top" alt="..." />
          <button className='bg-green-500 w-[7rem] h-[3rem] rounded top-[-50px] right-[-238px] text-white relative'>Available</button>
          <div className="card-body">
            <div className="property-details">
              <h1 className='text-[2rem] leading-[3.5rem]'>{title}</h1>
              <h6>Added :{date}</h6>
              <div className='mt-4'>
                <span className='p-3'>Bedroom</span>
                <span className='p-3'>Bathroom</span>
                <span className='p-3'>Area</span>
              </div>
              <div className='flex justify-evenly mt-3'>
                <div className='flex justify-between'>
                  <span>
                    <img src={bedImg} alt="bed" />
                  </span>
                  <span className='ml-1'>{bed}</span>
                </div>
                <div className='flex justify-between'>
                  <span>
                    <img src={bathImg} alt="" />
                  </span>
                  <span className='ml-1'>{bath}</span>
                </div>
                <div className='flex justify-between'>
                  <span>
                    <img src={areaImg} alt="" />
                  </span>
                  <span className='ml-1'>{area} </span>
                </div>
              </div>
              <div className='mt-4'>
                <p>Available:</p>
                <p className='text-[20px] text-[#596aac]'>{price} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Property
