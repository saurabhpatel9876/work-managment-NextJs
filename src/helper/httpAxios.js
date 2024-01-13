import axios from "axios";
export const httpHelperAxios=new axios.create({
    baseURL:process.env.BASE_URL
})