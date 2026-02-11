import { cart_list } from "../models/ecommerceModel.js";

// view current cart

export const getCart=async(req,res)=>{
    try{
 const showCart=await cart_list.findOne().populate("items.product");
       if(!showCart||showCart.items.length===0){
        return res.status(404).json({
            message:"Cart is empty"
        });
       }
       res.status(201).json({
        message:"Cart List:",
        showCart
       })
}catch(err){
    res.status(500).json({
        messsage:"error happend: ",
        err:err.message
    })
}
};

   


// post cart

export const addCart=async(req,res)=>{

try{
    const {cartId}=req.params
   const {product,quantity}=req.body;
   let cart =await cart_list.findById(cartId);
   if(!cart){
    return res.status(404).json({
        message:"Cart not found"
    })

 }
       const existingItem=cart.items.find(
        item=>item.product.toString()===product
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
        const {cartId}=req.params;
        const {product,quantity} =req.body;
        const updatedCart=await cart_list.findByIdAndUpdate(cartId);
        if(!updatedCart){
           return res.status(404).json({
               message:"cart not found"
           })
        }
        const item=updatedCart.items.find(
            item => item.product.toString()===product
        );
        if(!item){
            return res.status(404).json({
                message:"Product not in cart"
            })
        }
        item.quantity=quantity;
        await updatedCart.save();

        res.status(200).json({
            message:"Cart Updated",
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
         const {cartId}=req.params;
        const cart=await cart_list.findByIdAndDelete(cartId);
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