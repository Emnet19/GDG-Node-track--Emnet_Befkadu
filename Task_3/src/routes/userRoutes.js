import  express from "express";
import {getBooks,getBookById,CreateBooks} from "../controllers/userController.js";


const router = express.Router();


router.get("/:books",getBooks);
router.get("/:books/:id",getBookById);
router.post("/books",CreateBooks);

export default router;
