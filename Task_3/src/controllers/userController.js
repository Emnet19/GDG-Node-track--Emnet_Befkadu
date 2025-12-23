import Joi from "joi";
import userSchema from "../utils/validation.js";

const books=[
    {
        id: 1,
        title:"The Power of Habit",
        author:"charles Duhigg",
        price:350,
        description:"A book about how habits work and how they can be changed"
    },
    {
        id: 2,
        title:"Clean Code",
        author:"Robert C. Martin",
        price:600,
        description:"A handbook of agile software craftsmanship."
    }

]
// Dummy data
// GET /books
export const getBooks=(req,res)=>{
      res.json(books);
}


// GET /books/:id
export const getBookById=(req,res)=>{
    const id = parseInt(req.params.id);
    const book=books.find(bk=>bk.id===id);

    if(!book){
        return res.status(404).json({
            success:false,
            message:"Book not found"
        })
    }
    res.json(book)
    
   
}

export const CreateBooks =(req,res)=>{
    const {error}=userSchema.validation(req.body);

    if(error){
        return res.status(400).json({
            success:false,
            message:error.default[0].message
        });
    }

    const newBook={
           id:books.length+1,
           ...req.body
    };
    books.push(newBook);
    res.status(201).json({
        success:true,
        data:req.body
    });
}
