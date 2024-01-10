import mongoose from 'mongoose'
import React from 'react'

const connectDB = async() => {
 try {
    const {connection} = await mongoose.connect(process.env.MONGO_URI,{
        dbName:"work_man_cwDurgesh"
    })
    console.log("connect ho gya mongo:")
    
 } catch (error) {
    console.log("kch glt mongo connect hone me:-",error)
 }
}

export default  connectDB