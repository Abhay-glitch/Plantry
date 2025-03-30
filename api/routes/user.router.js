import express from "express";
import *as  usercontroller from '../controller/usercontroller.js';
const router=express.Router();

router.post("/save",usercontroller.save);
router.post("/login",usercontroller.login)
router.get("/fetch",usercontroller.fetch)
router.patch("/update",usercontroller.update)
router.delete("/delete",usercontroller.deleteUser)
export default router;