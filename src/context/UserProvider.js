"use client"

import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { currentUser } from '@/services/userService'

const UserProvider = ({children}) => {
    const [user,setUser]=useState(undefined)
    useEffect(()=>{
        async function load(){
           try {
            const tempUser=await currentUser()
            console.log("tempUser..:-",tempUser)
            setUser({...tempUser})
           } catch (error) {
            setUser(undefined)
            console.log("error in userprovie",error)
           }
        }
        load()
    },[])
    
  return (
    <>
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
    </>
  )
}

export default UserProvider