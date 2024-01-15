import { httpHelperAxios } from "@/helper/httpAxios";

export async function signUp(user){
    const result = await httpHelperAxios.
    post("/api/users",user).
    then((response)=>response.data)
    return result
}

export async function logIn(LoginData){
    const result = await httpHelperAxios.post("/api/login",LoginData).then((response)=>response.data)
    return result
}