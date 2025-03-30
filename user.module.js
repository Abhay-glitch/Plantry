import mongoose  from "mongoose";
import mongooseUniqueValidator from 'mongoose-unique-validator';
const userSchema=new mongoose.Schema({
    _id:Number,
    name:{
        type:String,
        trim:true,
        lowercase:true,
        required:[true,"name is Required"]
    },
    email:{
        type:String,
        lowercase:true,
        required:[true,"email is required!"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is Required!"],
        trim:true
    },
    mobile:{
        type:String,
        required:[true,"mobile is required"],
    },
    address:{
        type:String,
        trim:true,
        lowercase:true,
    },
    city:{
        type:String,
        required:[true,"city is required"],
    },
    gender:{
        type:String,
        required:[true,"gender is required"],
    },
    role:String,
    status:Number,
    info:String,
});
mongoose.plugin(mongooseUniqueValidator);
const userSchemaModel=mongoose.model('datas',userSchema);
export default userSchemaModel;