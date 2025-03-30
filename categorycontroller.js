import "../connection/connection.js"
import categorySchemaModel from "../module/categorymodule.js";
export const save=async(req,res)=>{
    var list= await categorySchemaModel.find();
    var len=list.length;
    var _id=(len==0)?1:list[len-1]._id+1;
    var details={...req.body,"_id":_id,"info":Date()};
    try{
        var categoryname=await categorySchemaModel.create(details);
        res.status(201).json({
            "status":true,
            "msg":"saved sucessfully!",
            "details":categoryname
        })
    }catch(err){
        res.status(500).json({
            "status":false,
            "mssg":err
        })
    }
}
export const update=async(req,res)=>{
    var category=await categorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
    console.log(category);
    if(category){
        var updated_category=await categorySchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set:JSON.parse(req.body.content_obj)});
        if(updated_category){
            res.status(200).json({
                "status":true,
                "updated Category":updated_category
            });
        }else{
            res.status(500).json({
                "status":false,
                "msg":"cannot find category!!"
            });
        }
    }else{
        res.status(404).json({
            "status":false,
            "msg":"resource Not Found!!"
        });
    }
}
export const delete_category=async (req,res)=>{
    var deleted_category=await categorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
    //console.log(deleted_category);
    if(deleted_category){
        var deletecat= await categorySchemaModel.deleteOne(JSON.parse(req.body.condition_obj));
        if(deletecat){
            res.status(200).json({
                "status":true,
                "msg":"Category Deleted Sucessfully!!",
                "deleted_user": deletecat
            });
        }else{
            res.status(500).json({
                "status":false,
                "msg":"category not deleted!!"
            })
        }
    }
    else{
        res.status(500).json({
            "status":false,
            "msg":"category not Found!!"
        })
    }
}
