
import { httpHelperAxios } from "@/helper/httpAxios";

export async function addTask(task){
    const result = await httpHelperAxios.post("api/tasks",task).
    then((response)=>response.data)
    return result
}