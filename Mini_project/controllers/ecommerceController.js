import express from 'express';
import {product_list,cart_list,order_list} from '../models/ecommerceModel.js';
// get product list
export const getProducts=async (req,res)=>{
    // const products= [name,description,price,stock,category,imageUrl]=req.body;
    const showProducts=await product_list.find();
    if(showProducts.length===0){
        res.status(404).json({
            message:"No product Found"
        })
    }
    res.status(201).json({
        message:"Product List:",
        showProducts,
    })
}
// get product by id
export const getProductsById= async(req,res)=>{
    const {id}=req.params;
    const showProductById=await product_list.findById(id);
    if(!showProductById){
        res.status(404).json({
            message:"No product with this id"
        })
    }
    res.status(201).json({
        message:"product found: ",
        showProductById,
    })
}

// add new product
export const addProduct=async (req,res)=>{
    const {name,description,price,stock,category,imageUrl}=req.body;
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
        res.status(404).json({
            message:"Failed to add products"
        })
    }
    res.status(201).json({
        saveProducts,
    })
}

// update product

export const updateProduct= async(req,res)=>{
    const{id}=req.params;
    const {name,description,price,stock,category,imageUrl}=req.body;
    const updatedProduct= await product_list.findByIdAndUpdate(
        id,
        {
            name,
            description,
            price,
            stock,
            category,
            imageUrl
        },
        {new:true,runValidators:true}
    );
      if(!updatedProduct){
        res.status(404).json({
            message:"Failed to update product"
        })
      }
      res.status(201).json({
        messahe :"Product Updated:",
        updatedProduct
      })
}

export const deleteProduct=async (req,res)=>{
    const {id}=req.params;
    const deletedProduct= await product_list.findByIdAndDelete(id);
    if(!deletedProduct){
        res.status(404).json({
            message:"unable to delete"
        })
    }
    res.status(201).json({
        message:"Deleted Successfully",
        deletedProduct
    })
}