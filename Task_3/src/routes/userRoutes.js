import  express from "express";
import router from express.Router();

import userController from "../controllers/userController";

router.get("/:books",userController.getUser);
router.get("/:books/id",userController.createUser);
router.post("/books");

export default router;
