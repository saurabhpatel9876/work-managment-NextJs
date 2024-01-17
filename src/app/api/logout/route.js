// import { NextResponse } from "next/server";

import { NextResponse } from "next/server"

// export async function POST(request){
//     const response = NextResponse.json({
//         message:"logOut done",
//         success:true
//     })
//     response.cookies.set("authToken","",{
//         expires:new Date(0) // use expires or expre
//     })
//     return response
// }


export async function POST(request){
    try {
        
       const response= NextResponse.json({
            message:"sucess logOut api",
            success:true
        })
        response.cookies.set("authToken","",{
            expires:new Date(0) 
        })
        return response
    } catch (error) {
        console.log("err:--",error)
        return NextResponse.json({
            message:"err in logout api",
            success:false
        })
        
    }

}