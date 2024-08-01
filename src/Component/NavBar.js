import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-[#38dcf5] py-5 md:px-10 px-7">
        <div className="font-extrabold text-2xl cursor-pointer flex items-center font-[Poppins] text-white capitalize transition-transform transform hover:scale-110 duration-300">
          <span className="text-4xl text-white font-bold mr-1 pt-2"></span>
          Skiez Technologies
        </div>
        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 text-white cursor-pointer md:hidden">
          <FiAlignJustify />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#38dcf5] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link to="/" className="text-white py-2 px-3 font-[Poppins]  hover:text-black hover:bg-white rounded-2xl duration-500 font-bold">
              Home
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link to="About" className="text-white py-2 px-3 font-[Poppins]    hover:text-black  hover:bg-white rounded-2xl duration-500 font-bold">
              About
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link to="Contact" className="text-white py-2 px-3 font-[Poppins]    hover:text-black hover:bg-white rounded-2xl duration-500 font-bold">
              Contact
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded-3xl hover:bg-indigo-400 duration-500'>
              GetStart
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
