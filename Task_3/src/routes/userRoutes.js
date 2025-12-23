const express =require("express");
const router=express.Router();

const userController= require("../controllers/userController");

router.get("/:books",userController.getUser);
router.get("/:books/id",userController.createUser);
router.post("/books");

module.exports=router;
