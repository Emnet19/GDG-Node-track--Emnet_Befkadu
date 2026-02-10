import { order_list } from "../models/ecommerceModel"
export const getOrder=async(req,res)=>{
      const showOrder=await order_list.find();
      if(!showOrder.length===0){
        return res.status(404).json({
            message:"order is empty"
        })
      }
      res.status(201).json({
        message:"order list: ",
        showOrder
      })
};


// get order by id

export const getOrderById=async(req,res)=>{
    const {id}=req.params
    const showOrderById=await order_list.findById();
}