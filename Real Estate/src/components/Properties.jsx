import React, { useState } from 'react';
// import house1 from '../Images/Cards/house1.jpg';

import  data  from '../data';
import Property from './Property';


const Properties = () => {
   
  return (
    <>
      <div className='mt-[24rem] text-center'>
        <h1 className='text-[25px] text-[#596aac]'>
          Our
        </h1>
        <h1 className='text-3xl mt-1'>Properties</h1>
      </div>
      <div className='flex flex-wrap'>
        {data.map((item,index) => {
            const {title,date,bed,bath,area,price,img} = item
            return(
                <Property key={index} {...item}/>
            )
          
        }
        )}
      </div>
     
    </>
  );
}

export default Properties;
