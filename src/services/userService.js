import { httpHelperAxios } from "@/helper/httpAxios";

export async function signUp(user){
    const result = await httpHelperAxios.
    post("/api/users",user).
    then((response)=>response.data)
    return result
}