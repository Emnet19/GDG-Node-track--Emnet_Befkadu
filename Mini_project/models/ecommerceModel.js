import mongoose from 'mongoose';

const productSchema=new mongoose.Schema({
    name:{
        type:string,
        required:true,    
    },
    description:{
        type:string,
        required:true,

    },
    price:{
        type:number,
        required:true,

    },
    stock:{
        type:number,
        required:true,
    },
    category:{
        type:string,
        required:true,
    },
    imageUrl:{
        type:string,
    }
});

const cartSchema=new mongoose.Schema({
    userId:{

    }
});

const orderSchema=new mongoose.Schema({
    items:{
        type:string,
        required:true,
    },
    total:{
        type:number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    customerInfo:{

    }
})

export const product_list=mongoose.model('product',productSchema);
export const cart_list=mongoose.model('cart',cartSchema);
export const order_list=mongoose.model('order',orderSchema);