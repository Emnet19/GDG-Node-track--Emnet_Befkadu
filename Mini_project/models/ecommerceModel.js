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
        type: String
    },
   items:[
    {
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'product',
            required:true
        },
        quantity:{
            type:Number,
            required:true,
            min:1
        }
    }
   ]
});

const orderSchema=new mongoose.Schema({
    items:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'product',
                required:true
            },
            quantity:{
                type:Number,
                required:true 
            }
        }
    ],
      
    total:{
        type: Number,
        required:true,
    },
    date:{
        type: Date,
        default:Date.now,
    },
    customerInfo:{
        name:{
            type:String,
            required:true  
        },
        email:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        }
    }
})

export const product_list=mongoose.model('product',productSchema);
export const cart_list=mongoose.model('cart',cartSchema);
export const order_list=mongoose.model('order',orderSchema);