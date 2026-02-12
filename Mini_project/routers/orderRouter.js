import express from 'express'
import { addOrder, getOrder, getOrderById } from '../controllers/orderController.js';

export const orderRouter=express.Router();
orderRouter.get('/',getOrder);
orderRouter.get('/:orderId',getOrderById);
orderRouter.post('/',addOrder);