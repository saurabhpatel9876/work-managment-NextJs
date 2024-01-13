"use client"
import { addTask } from '@/services/taskService'
import { stringify } from 'postcss'
import React, { useState } from 'react'
import { taost, toast } from "react-toastify";

const AddTask = () => {

    const[task,setTask]=useState({
        title:"",
        content:"",
        status:"none",
        userId:"659ecc2d4cf12423b12277b0"
    })

    const handleAddTask = async(event)=>{
        event.preventDefault()
        console.log(task)

        try {
          const result= await addTask(task)
          console.log(result)

           toast.success("task add ho gya",{
            position:'top-center'
           })
        } catch (error) {
            console.log("handleAddtask glt aa rha:",error)
            toast.error("glt in adding task",{
                position:'top-center'
            })
        }
    }

    const handleClear = async(event)=>{
        event.preventDefault()
        await setTask({
            title:"",
            content:"",
            status:"none",
            userId:"659ecc2d4cf12423b12277b0"
        })
    }
  return (
    <div className='bg-black text-white p-0 m-0'>

            <form onSubmit={handleAddTask} className="max-w-sm mx-auto ">
                <div className="mb-5">
                    <label
                        htmlFor="large-input"
                        className="mb-2 text-lg font-medium  dark:text-white flex justify-center items-center "
                    >
                        Add Task Here
                    </label>

                </div>
                <div className="mb-5">
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium  dark:text-white"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        onChange={(event)=>{setTask({
                            ...task,
                            title:event.target.value
                        })}}
                        value={task.title}
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="small-input"
                        className="block mb-2 text-sm font-medium  dark:text-white"
                    >
                        Content
                    </label>
                    <textarea
                        type="text"
                        id="small-input"
                        rows={5}
                        onChange={(event)=>{setTask({
                            ...task,
                            content:event.target.value
                        })}}
                        value={task.content}
                        className="block w-full p-2  border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="status"
                        className="block mb-2 text-sm font-medium  dark:text-white"
                    >
                        Status
                    </label>
                    <select
                         onChange={(event)=>{setTask({
                            ...task,
                            status:event.target.value
                        })}}
                        value={task.status}
                        id="status"
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >


                        <option className='text-black' value="none" disabled>
                            ---Select Status---
                        </option>
                        <option className='text-black' value="pending">Pending</option>
                        <option className='text-black' value="completed">Completed</option>
                    </select>
                </div>

               <div className='flex justify-center '>
               <button type='submit' className='bg-blue-600 p-1 rounded-lg hover:bg-blue-400'>Add Task</button>
                <button onClick={handleClear} className='bg-red-800 p-2 rounded-lg hover:bg-red-400 m-2'>Clear</button>

                {/* {JSON.stringify(task)} */}
               </div>

               
            </form>

        </div>
  )
}

export default AddTask