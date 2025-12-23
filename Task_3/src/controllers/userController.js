import Joi from "joi";
import {userSchema} from "../utils/validation";
// GET /books
const getBook=(req,res)=>{
      res.json({id,name:"The Power of Habit",author:"charles Duhigg",
        price:350,description:"A book about how habits work and how they can be changed"})
}
// GET /books/:id
const getUser=(req,res)=>{
    const {id} = req.params;
    // Dummy data

    res.json({id:1,
        title:"The Power of Habit",
        author:"charles Duhigg",
        price:350,
        description:"A book about how habits work and how they can be changed"
    },
    {
        id:2,
        title:"Clean Code",
        author:"Robert C. Martin",
        price:600,
        description:"A handbook of agile software craftsmanship."
    }

)
}
