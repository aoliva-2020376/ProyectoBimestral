import { Schema, model } from 'mongoose';

const invoiceSchema = Schema(
  {
    user: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: [true, 'User is required'] 
    },
    products: [
      { 
        product: { 
          type: Schema.Types.ObjectId, 
          ref: 'Product', 
          required: [true, 'Product is required']
        },
        quantity: { 
          type: Number, 
          required: [true, 'Quantity is required'], 
          min: [1, 'Quantity must be at least 1'] 
        },
        unitPrice: { 
          type: Number, 
          required: [true, 'Unit price is required'] 
        }
      }
    ],
    total: { 
      type: Number, 
      required: [true, 'Total amount is required'] 
    }
  },
  {
    versionKey: false, 
    timestamps: true  
  }
);

export default model('Invoice', invoiceSchema);
