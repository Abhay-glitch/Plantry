import express from 'express';
import * as categoryController from "../controller/categorycontroller.js";
const router=express.Router();

router.post("/save",categoryController.save);
router.patch("/update",categoryController.update);
router.delete("/delete",categoryController.delete_category);

export default router;