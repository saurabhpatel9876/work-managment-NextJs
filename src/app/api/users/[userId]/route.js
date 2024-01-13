import connectDB from "@/helper/db"
import { User } from "@/model/user"
import { NextResponse } from "next/server"

//get single user by id
export async function GET(request,{params}){
    const {userId} = params
    console.log(userId)
    try {
        await connectDB()
       const user=await User.findById(userId)
       return NextResponse.json(user)
    } catch (error) {
        console.log("glt in single user GET",error)
    }
}

export async function PUT(request,{params}){
    const {userId}=params
    const {name,password,about}=await request.json()
    try {
        // await connectDB()
        
        const user=await User.findById(userId)

        user.name=name
        user.password=password
        user.about=about

        let updatedUser = await user.save()
        return NextResponse.json(updatedUser)
    } catch (error) {
        console.log("glt in PUT:---",error)
        return NextResponse.json({
            message: "failed to update user !!",
            success: false,
          });
    }
}


export async function DELETE(request,{params}){
    const {userId}=params
   try {
    await User.deleteOne({
    _id:userId
    
    })
    return NextResponse.json({
        message:"delete ho gya",
        status:true
    })


   } catch (error) {
    console.log("glt in delete",error)
    return NextResponse.json({
        message: "Error in deleting user !!",
        success: false,
      });
   }
}