"use client"

import { signUp } from '@/services/userService'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        about:""
    })
    const handleSignUp=async(event)=>{
        event.preventDefault()

        if (data.name.trim() === "" || data.name == null) {
            toast.warning("Name is required !!", {
              position: "top-center",
            });
            return}

        try {
         const result=   await signUp(data)
         console.log(result)
            toast.success("user created")
        } catch (error) {
            console.log("glt signup me",error)
            toast.error("user not created")
        }
    }

    const handleReset=()=>{
        setData({
            name:"",
        email:"",
        password:"",
        about:""
        })
    }
  return (
    <div className='bg-black text-white'>
        <form onSubmit={handleSignUp} className="max-w-sm mx-auto ">
                <div className="mb-5">
                    <label
                        htmlFor="large-input"
                        className="mb-2 text-lg font-medium  dark:text-white flex justify-center items-center "
                    >
                       Sign Up Here
                    </label>

                </div>
                <div className="mb-5">
                    <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium  dark:text-white"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        onChange={(event)=>{setData({...data,name:event.target.value})}}
                        value={data.name}
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium  dark:text-white"
                    >
                       Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        onChange={(event)=>{setData({...data,email:event.target.value})}}
                        value={data.email}
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>


                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium  dark:text-white"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(event)=>{setData({...data,password:event.target.value})}}
                        value={data.password}
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>


               
                <div>
                    <label
                        htmlFor="about"
                        className="block mb-2 text-sm font-medium  dark:text-white"
                    >
                        About
                    </label>
                    <textarea
                        type="text"
                        id="about"
                        onChange={(event)=>{setData({...data,about:event.target.value})}}
                        value={data.about}
                        rows={5}
                        className="block w-full p-2  border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                <div className='flex justify-center '>
               <button type='submit' className='bg-blue-600 p-1 rounded-lg hover:bg-blue-400'>Signup</button>
                <button onClick={handleReset} className='bg-red-800 p-2 rounded-lg hover:bg-red-400 m-2'>Reset</button>
               </div>


                </form>
    </div>
  )
}

export default SignUp