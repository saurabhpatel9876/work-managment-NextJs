// const { Schema } = require("mongoose");
import mongoose, { Schema, model } from "mongoose";

const userSchema=new Schema({
    name:String,
    email:{type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{type:String,
    required:[true,"password is required"]},
    about:String
})
export const User = mongoose.models.users || mongoose.model("users",userSchema)
