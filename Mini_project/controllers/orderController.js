import { order_list,cart_list,product_list } from "../models/ecommerceModel"
export const getOrder=async(req,res)=>{
  try{
    const showOrder=await order_list.find().populate("items.product");
      if(showOrder.length===0){
        return res.status(404).json({
            message:"No orders found"
        })
      }
      res.status(200).json({
        message:"order list: ",
        showOrder
      })
  }catch(err){
    res.status(500).json({
      message:"Somehting went wrong: ",
      err
    })
  }
     
};


// get order by id

export const getOrderById=async(req,res)=>{
  try{
    const {orderId}=req.params
    const showOrderById=await order_list.findById(orderId).populate("Items.product");
    if(!showOrderById){
      return res.status(404).json({
        message: "Order not found"
      })
    }
    res.status(201).json({
      message:"order found using id: ",
      showOrderById
    })
  }catch(err){
    res.status(500).josn({
      message:"Somehting went wrong: ",
      err
    })
  }
  

}

// add order
export const addOrder=async(req,res)=>{
  try{
    const {cartId}=req.params;
    const {name,email,address}=req.body;

    const cart =await order_list.findById(cartId).populate("items.product");
    if(!cart||!cart.items.length===0){
      return res.status(404).json({
          message :"Cart is empty or not found"
      })
    }
    let total=0;
    for(let item of cart.items){
      if(item.product.stock<item.quantity){
         return res.status(404).json({
          message:`Not enough stock for ${item.product.name}`
         })
      }
    } 

  }catch(err){

  }
}

