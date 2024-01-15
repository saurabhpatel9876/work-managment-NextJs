import { User } from "@/model/user"
import { NextResponse } from "next/server"
import  Jwt  from "jsonwebtoken"; //don't use {Jwt} only Jwt
import  bcrypt  from 'bcryptjs';  //don't use {bcrypt} only bcrypt
import { cookies } from 'next/headers'
import connectDB from "@/helper/db";

export async function POST(request) {
    const { email, password } = await request.json()
    try {
        //1. get user
        await connectDB()
       const user= await User.findOne({
        email:email,
       })

        if (user == null) {
            throw new error("user not found")
        }

        //2. password match
        //    const matched = bcrypt.compareSync(password,user.password)
        const matched = bcrypt.compareSync(password, user.password);
        if (!matched) {
            throw new error("password is wrong")
        }

        //3. generate token 
        const token = Jwt.sign({
            _id: user._id,
            name: user.name
        }, process.env.JWT_KEY)

        //create cookies

        const response = NextResponse.json({
            message: "log in done",
            success: true,
            user: user //LHS user is property and RHS is definded by me 
        })

        response.cookies.set("authToken", token, {
            expiresIn: "1d",
            httpOnly: true
        })
        return response

        console.log(user);
        console.log(token);
    } catch (error) {
        console.log("glt in logIn post", error)
        return NextResponse.json(
            {
                message: error.message,
                success: false,
            },
            {
                status: 500,
            }
        );
    }
}