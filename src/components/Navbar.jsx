"use client"
import UserContext from '@/context/userContext';
import { logout } from '@/services/userService';
// components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {
  const context = useContext(UserContext);
  const router = useRouter()
  console.log("contexttt:-:",context)
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  const handleLogOut =async(event)=>{
    event.preventDefault()
    try {
      const result = await logout()
      console.log("logout in navbar:-",result)
      context.setUser(undefined)
      router.push("/")
      toast.success("logOut done")
    } catch (error) {
      console.log(error)
      toast.error("error in logOut")
    }
  }

  return (
    <nav className="bg-black p-4">
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

          {context.user && (<>
            <Link className="block text-white mb-2" href="/signup">
              {context.user.name}
            </Link>
          <button className="block text-white mb-2" onClick={handleLogOut}>logOut</button>
          </>)}

          {!context.user && (<>
            <Link className="block text-white mb-2" href="/signup">
             SignUp
            </Link>
            <Link className="block text-white" href="/login">
            LogIn
            </Link>
          </>)}
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
           {context.user && (<>
            <Link className="block text-white mb-2" href="/signup">
              {context.user.name}
            </Link>
            <button className="block text-white mb-2" onClick={handleLogOut}>logOut</button>
          </>)}

          {!context.user && (<>
            <Link className="block text-white mb-2" href="/signup">
             SignUp
            </Link>
            <Link className="block text-white" href="/login">
            LogIn
            </Link>
          </>)}
           </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
