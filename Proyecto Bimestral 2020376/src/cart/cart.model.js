import { Schema, model } from 'mongoose';

const cartSchema = Schema(
  {
    user: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: true, 
      unique: true 
    },
    items: [
      {
        product: { 
          type: Schema.Types.ObjectId, 
          ref: 'Product', 
          required: true
        },
        quantity: { 
          type: Number, 
          required: true, 
          min: 1
        },
        price: { 
          type: Number, 
          required: true
        }
      }
    ],
    totalPrice: { 
      type: Number, 
      default: 0 
    }
  },
  {
    versionKey: false, 
    timestamps: true
  }
);

export default model('Cart', cartSchema);
