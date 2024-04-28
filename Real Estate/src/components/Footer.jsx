import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import logo from '../Images/VBO-logo-e1682424251356.png'
const Footer = () => {
  return (
    <div className='bg-[#303030] h-[90vh] w-[98vw] mt-24 ml-1  '>
        <div className='flex justify-between m-[10rem] ' >
            <img className='mt-[2rem]' src="https://www.jbmakelaars.nl/wp-content/uploads/2020/02/JB-Makelaars-1-e1676409091558.png" alt="" />
            <div className='flex mt-[4.5rem]'>
            <FaFacebook className=' invert mx-1' />
            <FaInstagramSquare className=' invert mx-1'/>
            <FaLinkedin className=' invert mx-1'/>
            </div>


        </div>
        <div className='grid grid-cols-4'>
        <div className='text-[#808080] relative left-[10rem]'>
    <p className='text-white'>Quick Links</p>
    <p className='mb-2 mt-4'><IoMdArrowDropright className='inline' /> Home</p>
    <p className='mb-2 mt-4'><IoMdArrowDropright className='inline' /> Our Team</p>
    <p className='mb-2 mt-4'><IoMdArrowDropright className='inline' /> News</p>
    <div className='mt-4'>
        <p className='text-white'>Legal</p>
        <p className='mb-1 mt-4'><IoMdArrowDropright className='inline' /> Privacy</p>
        <p className='mb-1 mt-4'><IoMdArrowDropright className='inline' /> Policy</p>
    </div>
</div>

<div className='text-[#808080]'>
    <p style={{ visibility: 'hidden' }}>Placeholder</p>
    <p className='mb-2 mt-4'><IoMdArrowDropright className='inline' /> Properties</p>
    <p className='mb-2 mt-4'><IoMdArrowDropright className='inline' /> Our Partners</p>
    <p className='mb-2 mt-4'><IoMdArrowDropright className='inline' /> Contact</p>
</div>

<div className='text-[#808080]'>
    <p className='text-white mb-2'>Property Types</p>
    <p className='mb-2 mt-4'><IoMdArrowDropright className='inline' /> Residential</p>
    <p className='mb-2 mt-4'><IoMdArrowDropright className='inline' /> Apartments</p>
    <p className='mb-2 mt-4'><IoMdArrowDropright className='inline' /> House</p>
    <div className='mb-2'>
        <p className='text-white mt-4'>KVK Number</p>
        <p className='mt-3'>86883674</p>
    </div>
</div>

<div className='text-[#808080]'>
    <p className='text-white mb-2'>Contact Us</p>
    <p className='mb-2 mt-4'><IoLocation className='inline' /><span className='ml-4'>Jaap Bijzerweg 19, <br />3446 CR Woerden</span></p>
    <p className='mb-2 mt-4'><IoCall className='inline' /><span className='ml-4'>+31 (0)30 - 227 19 90</span></p>
    <p className='mb-2 mt-4'><MdEmail className='inline' /><span className='ml-4'>engagements@jbmakelaars.nl</span></p>
    <img className='mt-3' src={logo} alt="" />
</div>

        </div>
      
    </div>
  )
}

export default Footer
