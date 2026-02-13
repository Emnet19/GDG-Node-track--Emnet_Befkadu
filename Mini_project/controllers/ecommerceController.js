// import express from 'express';
import {product_list} from '../models/ecommerceModel.js';
// get product list
export const getProducts=async (req,res)=>{
    try{
   const showProducts=await product_list.find();
    if(showProducts.length===0){
      return  res.status(404).json({
            message:"No product Found"
        });
    }
    res.status(201).json({
        message:"Product List:",
        showProducts,
    })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            err:err.message
        })
    }
 
}


// get product by id
export const getProductsById= async(req,res)=>{
    try{
        const {id}=req.params;
        const showProductById=await product_list.findById(id);
    
        if(!showProductById){
       return res.status(404).json({
            message:"No product with this id"
        })
    }
    res.status(201).json({
        message:"product found: ",
        showProductById,
    })
    }catch(err){
         res.status(500).json({
            message:"Something went wrong",
            err:err.message
        })
    }
   
}

// add new product
export const addProduct=async (req,res)=>{
  try{
      const {name,description,price,stock,category,imageUrl}=req.body;

       if(price <0 || stock<0){
        return res.status(400).json({
            message:"Price must be positive and stock non-negative"
        });
       }

      const newProduct=new product_list({
        name,
        description,
        price,
        stock,
        category,
        imageUrl
    })
   const saveProducts=await newProduct.save();
    if(!newProduct){
       return res.status(404).json({
            message:"Failed to add products"
        })
    }
    res.status(201).json({
        saveProducts,
    })
  }catch(err){
    res.status(500).json({
        messsage:"Something went wrong",
        err:err.message
    })
  }
}

// update product

export const updateProduct= async(req,res)=>{
    try{
        const{id}=req.params;
    const updatedProduct= await product_list.findByIdAndUpdate(
        id,req.body,
        {new:true,runValidators:true}
    );
      if(!updatedProduct){
      return  res.status(404).json({
            message:"product not found"
        })
      }
      res.status(201).json({
        messahe :"Product Updated:",
        updatedProduct
      })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            err:err.message
        })
    }
}

export const deleteProduct=async (req,res)=>{
    try{
      const {id}=req.params;
    const deletedProduct= await product_list.findByIdAndDelete(id);
    if(!deletedProduct){
       return res.status(404).json({
            message:"unable to delete"
        })
    }
    res.status(201).json({
        message:"Deleted Successfully",
        deletedProduct
    })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            err:err.message
        })
    }
}