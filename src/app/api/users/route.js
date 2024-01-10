import connectDB from "@/helper/db"
import { User } from "@/model/user"
import { NextResponse } from "next/server"

export async function GET(request){
    await connectDB()
  let user =[]
  try {
    user =await User.find()
    return NextResponse.json(user)
  } catch (error) {
    console.log("GET me prblm",error)
  }
}

export async function POST(request){
 const {name,email,password,about} = await request.json();
 try {
    const createUser = new User({
        name,
        email,
        password,
        about
    })
    await connectDB()
    const createdd= await createUser.save();
    return NextResponse.json(createUser)
 } catch (error) {
    console.log("POST me glt aa rha hain",error)
 }
}