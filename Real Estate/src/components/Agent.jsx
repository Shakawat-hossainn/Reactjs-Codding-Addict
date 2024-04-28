import React from 'react'


const Agent = ({img,title,email,Number}) => {
  return (
    <div className='w-[35rem] h-[14rem]  bg-[#e7de91] relative mt-[7rem]  '>
    <img className='h-[9rem] w-[9rem] relative  left-[13rem] top-[-3rem]' src={img} alt="" />
    <div className='text-center relative top-[-2rem]'>
        <p className='text-[1.4rem] text-[#517a7a]'>{title} </p>
    <p className='text-[#781646]'>{Number}</p>
    <p className=' text-[#36881f] '>{email}</p>
    </div>
</div>
  )
}

export default Agent
