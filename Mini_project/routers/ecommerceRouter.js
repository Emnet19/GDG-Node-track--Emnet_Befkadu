import express from 'express';
import { getProducts,getProductsById,addProduct,updateProduct,deleteProduct } from '../controllers/ecommerceController.js';
import { addOrder, getOrder, getOrderById } from '../controllers/orderController.js';
import { getCart,updateCart ,deleteCart,addCart} from '../controllers/cartController.js';
// import 
export const productRouter=express.Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProductsById);
productRouter.put('/:id', updateProduct);
productRouter.post('/', addProduct);
productRouter.delete('/:id', deleteProduct);

export const cartRouter=express.Router();
cartRouter.get('/',getCart);
cartRouter.put('/',updateCart);
cartRouter.post('/',addCart);
cartRouter.delete('/:productId',deleteCart);


export const orderRouter=express.Router();
orderRouter.get('/',getOrder);
orderRouter.get('/:id',getOrderById);
orderRouter.post('/',addOrder);