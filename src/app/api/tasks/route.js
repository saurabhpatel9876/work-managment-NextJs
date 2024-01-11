import { responseMessage } from "@/helper/responseMessage"
import { Task } from "@/model/task"
import { NextResponse } from "next/server"

export async function GET(request){
    try {
        let task = await Task.find()
        return NextResponse.json(task)
        return responseMessage("done GET(Task) ",200,true)
    } catch (error) {
        console.log("GET in TAsk glt hain:",error)
    }
}

export async function POST(request){
    try {
       const {title,content,status,userId} = await request.json()
       const task= new Task({
        title:title,
        content:content,
        status:status,
        userId:userId
       })
       const createdTask = await task.save()
       return NextResponse.json(createdTask)

        return responseMessage("done PostT(Task) ",200,true)
    } catch (error) {
        console.log("POsT in TAsk glt hain:",error)
    }
}