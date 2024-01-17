
import { User } from "@/model/user";
import  Jwt  from "jsonwebtoken"; //don't {Jwt} only Jwt
import { NextResponse } from "next/server";

export async function GET(request){
const authToken=request.cookies.get("authToken")?.value;
console.log(authToken)
if(!authToken){
    return NextResponse.json({
        message:"user is not logged in"
    })
}
const data = Jwt.verify(authToken,process.env.JWT_KEY)
const user = await User.findById(data._id).select("-password")

console.log("data:-current wala:",data)

return NextResponse.json(user)

};
