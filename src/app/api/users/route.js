import connectDB from "@/helper/db"
import { User } from "@/model/user"
import { NextResponse } from "next/server"
// import bcrypt, { hashSync } from 'bcryptjs'
import bcrypt from "bcryptjs";

export async function GET(request) {
  await connectDB()
  let user = []
  try {
    user = await User.find().select("-password")
    return NextResponse.json(user)
  } catch (error) {
    console.log("GET me prblm", error)
    return NextResponse.json({
      message: "failed to get users",
      success: false,
    });

  }
}

//create user
export async function POST(request) {
  const { name, email, password, about } = await request.json();
  try {
    const createUser = new User({
      name,
      email,
      password,
      about
    })
    
    createUser.password=bcrypt.hashSync(createUser.password,parseInt(process.env.BCRYPT_SALT))
    await connectDB()
    const createdd = await createUser.save();
    return NextResponse.json(createUser, {
      status: 201,
    })
  } catch (error) {
    console.log("POST me glt aa rha hain", error)

    return NextResponse.json(
      {
        message: "failed to create user !!",
        status: false,
      },
      {
        status: 500,
      })
  }
}