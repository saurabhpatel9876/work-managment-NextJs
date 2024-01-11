import connectDB from "@/helper/db"
import { responseMessage } from "@/helper/responseMessage"
import { Task } from "@/model/task"
import { NextResponse } from "next/server"


export async function GET(request,{params}){
    
    try {
        const {taskId}=params
        let task = await Task.findById(taskId)
        return NextResponse.json(task)
        return responseMessage("done GET ",200,true)

    } catch (error) {
        console.log("glt in GET(task) single",error)
    }
}
export async function PUT(request,{params}){
    
    try {
        const {taskId}=params
        // await connectDB()
        const {title,content,status}=await request.json()
        let task = await Task.findById(taskId)
        task.title=title,
        task.content=content,
        task.status=status

        const updatedTask = await task.save()
        return NextResponse.json(updatedTask)
        return responseMessage("done PUT ",200,true)

    } catch (error) {
        console.log("glt in PUT(task)",error)
    }
}

export async function DELETE(request,{params}){
    
    try {
        const {taskId}=params
         await Task.deleteOne({
            _id:taskId
        })
  
        return responseMessage("done DELETE ",200,true)

    } catch (error) {
        console.log("glt in DELETE(task) ",error)
    }
}