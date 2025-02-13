import { Schema, model } from 'mongoose';

const productSchema = Schema(
  {
    name: { 
      type: String, 
      required: [true, 'Name is required'], 
      maxLength: [100, `Can't exceed 100 characters`] 
    },
    description: { 
      type: String, 
      required: [true, 'Description is required'], 
      maxLength: [255, `Can't exceed 255 characters`] 
    },
    price: { 
      type: Number, 
      required: [true, 'Price is required']
    },
    stock: { 
      type: Number, 
      required: [true, 'Stock is required'], 
      min: [0, 'Stock cannot be negative'] 
    },
    category: { 
      type: Schema.Types.ObjectId, 
      ref: 'Category', 
      required: [true, 'Category is required'] 
    }
  },
  {
    versionKey: false, 
    timestamps: true  
  }
);

export default model('Product', productSchema);
