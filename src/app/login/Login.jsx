
import React from 'react'

const Login = () => {
  return (
    <div>
        <form className="max-w-sm mx-auto ">
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
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                <div className='flex justify-center '>
               <button className='bg-blue-600 p-1 rounded-lg hover:bg-blue-400'>Signup</button>
                <button className='bg-red-800 p-2 rounded-lg hover:bg-red-400 m-2'>Reset</button>
               </div>


                </form>
    </div>
  )
}

export default Login