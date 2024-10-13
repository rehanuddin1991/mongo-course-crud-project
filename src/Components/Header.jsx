import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown hidden xs:block ssm:block">
        <div tabIndex={0} role="button" className="btn btn-ghost    ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-4 text-[darkcyan] font-bold w-52 p-2 shadow">
         <li><Link to="/">Home </Link> </li>
         <li><Link to="/course">Course </Link> </li>
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost  xs:text-[0.9rem] ssm:text-[0.9rem] lg:text-xl md:text-xl sm:text-xl">Rehan's UI</Link>
    </div>
    <div className="navbar-center text-2xl font-bold xs:hidden ssm:hidden sm:hidden  md:flex lg:flex">
      <ul className="menu menu-horizontal px-1 text-[midnightblue]">
        <li><Link to="/">Home </Link> </li>
        <li><Link to="/course">Course </Link> </li>
        
         
      </ul>
    </div>
    <div className="navbar-end flex gap-4 items-center   ">
      <Link className="btn btn-info xs:text-[0.6rem] md:text-[0.8rem] ssm:text-[0.6rem]  xs:py-1 xs:px-1"  to="/about">About</Link> 
       <Link className="btn btn-primary  xs:text-[0.6rem] md:text-[0.8rem] ssm:text-[0.6rem]  xs:py-1 xs:px-1 " to="/contact">Contact</Link>  
    </div>
  </div>
  )
}

export default Header