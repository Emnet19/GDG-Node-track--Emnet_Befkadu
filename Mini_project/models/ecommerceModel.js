import mongoose from 'mongoose';

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,    
    },
    description:{
        type:String,
        required:true,

    },
    price:{
        type: Number,
        required:true,

    },
    stock:{
        type: Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    }
});

const cartSchema=new mongoose.Schema({
    userId:{

    }
});

const orderSchema=new mongoose.Schema({
    items:{
        type: String,
        required:true,
    },
    total:{
        type: Number,
        required:true,
    },
    date:{
        type: Date,
        default:Date.now,
    },
    customerInfo:{

    }
})

export const product_list=mongoose.model('product',productSchema);
export const cart_list=mongoose.model('cart',cartSchema);
export const order_list=mongoose.model('order',orderSchema);