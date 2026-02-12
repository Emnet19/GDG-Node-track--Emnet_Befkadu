import { cart_list,product_list } from "../models/ecommerceModel.js";

// view current cart

export const getCart=async(req,res)=>{
    try{
       const showCart=await cart_list.findOne().populate("items.product");
       if(!showCart||showCart.items.length===0){
        return res.status(200).json({
            message:"Cart is empty",
            items:[]
        });
       }
       res.status(200).json({
        message:"Cart List:",
        showCart
       })
}catch(err){
    res.status(500).json({
        messsage:"Error happend: ",
        err:err.message
    })
}
};

   


// post cart
export const addCart=async(req,res)=>{
try{
   const {productId,quantity}=req.body;

   const product =await product_list.findById(productId);
   if(!product){
       return res.status(404).json({
           message:"Product not found"
        });
    }
    if(product.stock < quantity){
        return res.status(400).json({
            message:"Not enough amount in stock"
        })
    }

    let cart =await cart_list.findOne();
    
   if(!cart){
      cart=await cart_list.create({items:[]})

 }
       const existingItem=cart.items.find(
        item=>item.product.toString()===productId
       );

       if(existingItem){
        existingItem.quantity+=quantity;
       }else{
        cart.items.push({
            product,quantity
        });
       }
       await cart.save();
       res.status(201).json({
        message:"Item added to cart: ",
        cart
       })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong: ",
            err:err.message

        
        })
    }
}



// update cart
export const updateCart=async(req,res)=>{
    try{
        const {productId,quantity} =req.body;
        const updatedCart=await cart_list.findOne();
        if(!updatedCart){
           return res.status(404).json({
               message:"cart not found"
           })
        }
        const item=updatedCart.items.find(
            item => item.product.toString()===productId
        );
        if(!item){
            return res.status(404).json({
                message:"Product not in cart"
            })
        }
        item.quantity=quantity;
        await updatedCart.save();

        res.status(200).json({
            message:"Cart Updated successfully",
            updatedCart
        })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong: ",
             err:err.message

        })
    }
        

}


// delete cart 
export const deleteCart=async(req,res)=>{
    try{
        const {productId}=req.params;

        const cart=await cart_list.findOne();

        if(!cart){
            return res.status(404).json({
                message:"cart not found"
            });
        }

        cart.items=cart.items.filter(
            item=>item.product.toString() !== productId
        );

        await cart.save();

        res.status(200).json({
            message:"Item removed from cart: ",
            cart
        });

    }catch(err){
        res.status(500).json({
            message:"something went wrong: ",
            err:err.message

        })
    }  
}