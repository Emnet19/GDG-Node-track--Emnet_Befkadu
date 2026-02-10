import { cart_list } from "../models/ecommerceModel";

// view current cart

export const getCart=async(req,res)=>{
    const showCart=await cart_list.find();
       if(!showCart.length===0){
        return res.status(404).json({
            message:"Cart is empty"
        });
       }
       res.status(201).json({
        message:"Cart List:",
        showCart
       })
}


// post cart

// export const addCart=async(req,res)=>{
//     const []
// }

