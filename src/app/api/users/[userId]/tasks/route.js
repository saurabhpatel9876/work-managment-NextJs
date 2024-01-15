import { responseMessage } from "@/helper/responseMessage"
import { Task } from "@/model/task"
import { NextResponse } from "next/server"



//for single users to show it's all task
export async function GET(request,{params}){
    const {userId}=params
    try {
        const task = await Task.find({
            userId:userId   /// here LHS side userId is property of schema
        })
        return NextResponse.json(task)
        return responseMessage("ho gya GET user--task",200,true)
    } catch (error) {
        console.log("glt in GET [userId]-->tasks--route.js:--",error)
        return responseMessage("Failed to get tasks", 404, false);
    }
}