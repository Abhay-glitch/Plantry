import mongoose from 'mongoose'

const categorySchema= new mongoose.Schema({
    _id:Number,
    catname:{
        type:String,
        uppercase:true,
        trim:true,
        required:[true,"Category Name Is required!"]
    },
    image:{
        type:String,
        trim:true,
        required:[true,"Image name required!"]
    },
    
    info:String
});

const categorySchemaModel=mongoose.model('categorydatas',categorySchema);
export default categorySchemaModel;