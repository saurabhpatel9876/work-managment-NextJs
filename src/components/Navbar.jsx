"use client"
// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or brand */}
        <Link className="text-white text-lg font-bold" href="/">Work Manager
         
        </Link>

        {/* Responsive toggle button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>

        {/* Navbar links for larger screens */}
        <div className="hidden lg:flex space-x-4">
          <Link className="text-white" href="/">
          Home
          </Link>
          <Link className="text-white" href="/addTask">
            Add Task
          </Link>
          <Link className="text-white" href="/showTask">
            Show Tasks
          </Link>

          <Link className="block text-white mb-2" href="/signup">
              Sign Up
            </Link>
            <Link className="block text-white" href="/login">
            Log In
            </Link>
        </div>

        {/* Responsive Navbar links */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-blue-600 p-4">
            <Link className="block text-white mb-2" href="/">Home
             
            </Link>
            <Link className="block text-white mb-2" href="/addTask">
              Add Task
            </Link>
            <Link className="block text-white" href="/showTask">
            Show Tasks
            </Link>
            <br></br>
            <br></br>
           <div className='flex gap-4'>
           <Link className=" block text-white mb-2" href="/signup">
              Sign Up
            </Link>
            <Link className="block text-white" href="/login">
            Log In
            </Link>
           </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
