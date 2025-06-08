import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = (
    <><li>
          <a
            href="#home"
            className=" hover:text-blue-400 bg-gradient-to-r from-purple-400 to-blue-900
          text-transparent bg-clip-text transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-blue-400 bg-gradient-to-r from-purple-400 to-blue-900
          text-transparent bg-clip-text transition-colors duration-300 "
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="hover:text-blue-400 bg-gradient-to-r from-purple-400 to-blue-900
          text-transparent bg-clip-text transition-colors duration-300"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-blue-400 bg-gradient-to-r from-purple-400 to-blue-900
          text-transparent bg-clip-text transition-colors duration-300"
          >
            Contact
          </a>
        </li>
    </>
  );

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/10 backdrop-blur-md shadow-md border-b border-white/20 px-6 md:px-20 h-[70px] flex justify-between items-center">
      
      {/* Brand */}
      <div className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-900 text-transparent bg-clip-text">
        Calvin Koushik
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-xl text-white">
        {menuItems}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#000000ee] backdrop-blur-lg text-white py-6 px-10 rounded-b-xl shadow-xl md:hidden transition-all duration-500">
          <ul className="flex flex-col gap-4 text-lg">{menuItems}</ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
