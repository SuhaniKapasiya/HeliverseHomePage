import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/motionarteffect-img2.png";

const Navbar = () => {
  return (
    <div className="bg-richblack-800 border-b-richblack-700 ">
      <div
        className="flex justify-between items-center h-14 max-w-6xl mx-auto 
       "
      >
        {" "}

        <NavLink to="/">
          <div className="ml-5 flex gap-1 justify-center items-center text-white">
            <img src={logo} className="h-10" alt="Logo" />
            <div>
              envato<span className='text-caribbeangreen-50'>market</span>
            </div>
          </div>
        </NavLink>
        <div className="">
          <button className=" text-white bg-caribbeangreen-25 font-semibold py-2 mr-4 mt-2 px-5 hover:scale-95 transition-all rounded-md  border-richblack-5">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
