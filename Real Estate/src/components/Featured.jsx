import React from 'react'
import imgProp from '../Images/JanPeter.jpg'
import bed from '../Images/bed.svg'
import bath from '../Images/bath.svg'
import area from '../Images/area.svg'
const Featured = () => {
  return (
    <div className='h-full'>
        <div className='text-center mt-[6rem]'>
        <h4 className='text-[20px] text-[#4b5ea3]'>Check Out Our</h4>
        <h1 className='text-[30px]'>Featured Properties</h1>
        </div>
        <div className="imgProp flex justify-center  ">
          <img className='h-[90vh] w-[70vw] mt-7 absolute' src={imgProp} alt="property" />
          <div className="propContainer top-[10rem] left-[-24rem]">
            <h1 className='text-[2rem] leading-[3.5rem] '>Jan Pieterszoon Coenstraat 125-Bis, 3531 ES UTRECHT</h1>
            <h6>Added : 5 days ago</h6>
            <div className='mt-4'>
            <span className='p-3'>Bedroom</span>
            <span className='p-3'>Bathroom</span>
            <span className='p-3'>Area</span>
            </div>
            <div className='flex justify-evenly mt-3'>
              <div className='flex justify-between'>
                <span>
                  <img src={bed} alt="bed" />
                </span>
                <span className='ml-1'>
                    3
                </span>
              </div>
              <div className='flex justify-between'>
                <span>
                  <img src={bath} alt="" />
                </span>
                <span  className='ml-1'>
                        2.5
                </span>
              </div>
              <div className='flex justify-between'>
                <span>
                  <img src={area} alt="" />
                </span>
                <span  className='ml-1'>
                         106.7
                </span>
              </div>
            </div>
            <div className='mt-4'>
              <p>Available:</p>
              <p className='text-[20px] text-[#596aac]'>
			 €650.000 </p>
            </div>

          </div>

        </div>
    </div>
  )
}

export default Featured
