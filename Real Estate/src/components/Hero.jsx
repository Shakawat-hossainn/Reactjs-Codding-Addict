import React from 'react'
import { CiSearch } from "react-icons/ci";
import { VscZoomIn } from "react-icons/vsc";
const Hero = () => {
  return (
    <div className="img-container hero">
        <div className="text-center relative top-[13rem] heads">
        <h1 className='head1 text-[40px] text-[#67a463] font-medium       '>Your Expat Property Brokers</h1>
        <h3 className='text-[20px] text-[#858585]'>Looking for Your Ideal Property?</h3>

        </div>
        <div className="dropdowns flex justify-center top-[15rem] relative">
        <div className="dropdown text-center relative   ">
  <button className="btn btn-secondary dropdown-toggle bg-[#e7eaef] text-[#444980] h-[50px]" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Apartments
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        <div className="dropdown text-center relative    ">
  <button className="btn btn-secondary dropdown-toggle bg-[#e7eaef] text-[#444980]  h-[50px] w-[20rem] text-left" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Consultation
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div><VscZoomIn className='h-[50px] w-[43px] bg-blue-400 ' /></div>
<div className="input-group mb-3 w-[120px] h-[50px]">
  <input  type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    
  </div>
</div>

</div>

    </div>
  )
}

export default Hero
