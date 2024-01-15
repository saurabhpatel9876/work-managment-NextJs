"use client"
import { logIn } from '@/services/userService'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
const Login = () => {
    const router= useRouter()
    const[LoginData,setLoginData]=useState({
        email:"",
        password:""
    })

    const handleLogin=async(event)=>{
       event.preventDefault()

       if (LoginData.email.trim() === "" || LoginData.password.trim() === "") {
        toast.info("Invalid Data !!", {
          position: "top-center",
        });
    }

       try {
        const result = await logIn(LoginData)
        console.log(result)

        toast.success("login success")

        router.push("/profile/user")
       } catch (error) {
        console.log("err in login",error)
        toast.error(error.response.data.message, {
            position: "top-center",
          });
       }
    }
  return (
    <div>
        <form className="max-w-sm mx-auto " onSubmit={handleLogin}>
                <div className="mb-5">
                    <label
                        htmlFor="large-input"
                        className="mb-2 text-lg font-medium  dark:text-white flex justify-center items-center "
                    >
                       Login Here
                    </label>

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
                        onChange={(event)=>{setLoginData({...LoginData,email:event.target.value})}}
                        value={LoginData.email}
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium  dark:text-white"
                    >
                        password
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(event)=>{setLoginData({...LoginData,password:event.target.value})}}
                        value={LoginData.password}
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

               

                <div className='flex justify-center '>
               <button type='submit' className='bg-blue-600 p-1 rounded-lg hover:bg-blue-400'>Login</button>
                <button className='bg-red-800 p-2 rounded-lg hover:bg-red-400 m-2'>Reset</button>
               </div>


                </form>
    </div>
  )
}

export default Login