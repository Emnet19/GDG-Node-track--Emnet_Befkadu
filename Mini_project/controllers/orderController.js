import { order_list,cart_list,product_list } from "../models/ecommerceModel.js"
export const getOrder=async(req,res)=>{
  try{
    const showOrder=await order_list.find().populate("items.product");
      if(showOrder.length===0){
        return res.status(200).json({
            message:"No orders found",
            showOrder:[]

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
    const showOrderById=await order_list.findById(orderId).populate("items.product");
    if(!showOrderById){
      return res.status(404).json({
        message: "Order not found"
      })
    }
    res.status(200).json({
      message:"order found using id: ",
      showOrderById
    })
  }catch(err){
    res.status(500).json({
      message:"Somehting went wrong: ",
      err:err.message
    })
  }
}

// add order
export const addOrder=async(req,res)=>{
  try{
    const {name,email,address}=req.body;

    if(!name||!email||!address){
      return res.status(400).json({
        message:"Customer information needed"
      })
    }

    const cart =await cart_list.findOne().populate("items.product");
    if(!cart||cart.items.length===0){
      return res.status(404).json({
          message :"Cart is empty or not found"
      })
    }
    let total=0;
    for(let item of cart.items){
      if(item.product.stock < item.quantity){
         return res.status(400).json({
          message:`Not enough stock for ${item.product.name}`
         })
      }
      total += item.product.price * item.quantity;
    } 
      //  create order
      const newOrder=await order_list.create({
        items:cart.items.map(item=>({
          product:item.product._id,
          quantity:item.quantity
        })),
        total,
        customerInfo:{name,email,address}
      });

      // reduce form stock
      for(let item of cart.items){
        await product_list.findByIdAndUpdate(
          item.product._id,
          {$inc:{stock: -item.quantity}}
        );
      }

      cart.items=[];
      await cart.save();

      res.status(201).json({
        message:"Order Created successfully",
        newOrder
      });
      
  }catch(err){
         res.status(500).json({
          message:"Something went wrong",
          err:err.message
         })
  }
}

