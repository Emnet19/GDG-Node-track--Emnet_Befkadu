import express from 'express'
import { getCart,updateCart ,deleteCart,addCart} from '../controllers/cartController.js';

export const cartRouter=express.Router();
cartRouter.get('/',getCart);
cartRouter.put('/',updateCart);
cartRouter.post('/',addCart);
cartRouter.delete('/:productId',deleteCart);