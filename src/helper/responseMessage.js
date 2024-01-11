import { NextResponse } from "next/server"

export const responseMessage=(msgTxt,StatusCode,SuccessStatus)=>{
  return NextResponse.json({
    message:msgTxt,
    success:SuccessStatus
  },{
    status:StatusCode
  })
}