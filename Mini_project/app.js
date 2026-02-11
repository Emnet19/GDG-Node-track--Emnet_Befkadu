import express from 'express';
import {cartRouter, orderRouter, productRouter} from './routers/ecommerceRouter.js'
import connectDB from './config/dbConfig.js';
connectDB(); 
const app=express();

app.use(express.json());
app.use("/products",productRouter);
app.use("/cart",cartRouter)
app.use("/orders",orderRouter);

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})