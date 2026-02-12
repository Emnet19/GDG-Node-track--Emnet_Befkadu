import express from 'express';
import { getProducts,getProductsById,addProduct,updateProduct,deleteProduct } from '../controllers/ecommerceController.js';
// import 
export const productRouter=express.Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProductsById);
productRouter.put('/:id', updateProduct);
productRouter.post('/', addProduct);
productRouter.delete('/:id', deleteProduct);




