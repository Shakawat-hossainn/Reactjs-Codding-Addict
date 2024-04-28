// Navbar.jsx

import React from 'react';
import { BsFillTelephonePlusFill } from "react-icons/bs";
import logo from '../Images/logo.png';

const Navbar = () => {
  // const handleNavigateToAgents = () => {
  //   // Scroll to Agents component or perform any other navigation logic
  //   const agentsSection = document.getElementById('agents-section');
  //   if (agentsSection) {
  //     agentsSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <>
      <nav className="flex justify-between list-none navbar">
        <div className="ml-[5rem] mt-4 "><img src={logo} alt="logo" /></div>
        <div className='flex justify-around items-center my-[88px]'>
          <li className="px-8 hover:bg-green-300 py-3 rounded text-[#596aac] "><a href="/">Home</a></li>
          <li className="px-8 hover:bg-green-300 py-3 rounded text-[#596aac] "><a href="/">Properties</a></li>
          <li className="px-8 hover:bg-green-300 py-3 rounded text-[#596aac] "><a href="/">About Us</a></li>
          <li className="px-8 hover:bg-green-300 py-3 rounded text-[#596aac] ">
  <a href="#agents-section">Our Services</a>
</li>
          <li className="px-8 hover:bg-green-300 py-3 rounded text-[#596aac] "><a href="/">FAQs</a></li>
          <li className="px-8 hover:bg-green-300 py-3 rounded text-[#596aac] "><a href="/">Our Agents</a></li>
          <li className="px-8 hover:bg-green-300 py-3 rounded text-[#596aac] "><a href="/">Contact</a></li>
          <li className="px-8 py-3   mr-[2rem] flex items-center">
            <BsFillTelephonePlusFill />
            <span className="ml-2" >+880 1748644559</span>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
