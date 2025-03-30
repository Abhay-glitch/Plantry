import '../connection/connection.js'
import userSchemaModel from '../module/user.module.js';
import rs from 'randomstring'
import jwt from 'jsonwebtoken'
import url from 'url'
export const save=async(req,res)=>{
    var userList= await userSchemaModel.find();
    var len=userList.length;
    var _id=(len==0)?1:userList[len-1]._id+1;
    var userdetails={...req.body,"_id":_id,"role":"user","status":0,"info":Date()};
    try{
        var user=await userSchemaModel.create(userdetails);
        res.status(201).json({
            "status":true,
            "msg":"saved sucessfully!",
            "details":user
        })
    }catch(err){
        res.status(500).json({
            "status":false,
            "mssg":err
        })
    }
};
export const login=async (req,res)=>{   
    var object={...req.body,"status":1};
    var userdetails=await userSchemaModel.find(object);
    //console.log(userdetails);
    if(userdetails.length!=0){
        const payload={"subject":userdetails[0].email};
        const key=rs.generate();
        const token=jwt.sign(payload,key);
        res.status(200).json({
            "status":true,
            "token":token,
            "msg":"Login Sucessfull !!!",
            "userdetails":userdetails[0]
        })
        }
        else(err)=>{
        {
            res.send(err)
            res.status(500).json({
                "status":false,
                "mssg":"unable to find user!!",
                "error":err
            })
    }
}
}
export const fetch=async (req,res)=>{
    var condition_obj = url.parse(req.url,true).query;
    //console.log(condition_obj);
   var userlist= await userSchemaModel.find(condition_obj);
   //console.log(userlist);
   if(userlist.length!=0){
    res.status(200).json(
        
        userlist
    );
   }
   else{
    res.status(404).json({
        "status":"resource not found"
    });
   }
}

export const update=async (req,res)=>{
    
    var user =await userSchemaModel.findOne((req.body.condition_obj));
    console.log(user);
    if(user){
        var updated_user= await userSchemaModel.updateOne((req.body.condition_obj),{$set:(req.body.content_obj)});
        if(updated_user){
            res.status(200).json({
                
                "user":updated_user
            })
        }
        else{
            res.status(404).json({
                "status":false,
                "msg":"resource Not updated !!"
            })
        }
    }else{
        res.status(404).json({
            "status":false,
            "msg":"user not found"
        })
    }
}
export const deleteUser =async (req,res)=>{
    var user=await userSchemaModel.findOne((req.body.condition_obj));
     //console.log(user);
    if(user)
    {
      var deleted_user = await userSchemaModel.deleteOne((req.body.condition_obj));
        if(deleted_user)
        {
            res.status(201).json({"msg":"resource deleted successfully"});
        }   
        else
        {
            res.status(500).json({"msg":"resource not deleted successfully"});    
        }
    }   
    else
    {
        res.status(404).json({"msg":"resource not found"});
    } 
}