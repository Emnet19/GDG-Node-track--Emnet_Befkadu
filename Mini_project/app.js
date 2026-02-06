import express from 'express';
import {productRouter} from './routers/ecommerceRouter.js'
import connectDB from './config/dbConfig.js'; 
const app=express();

app.use(express.json());
app.use("/profucts",productRouter);

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})