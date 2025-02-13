import { Schema, model } from 'mongoose';

const categorySchema = Schema(
  {
    name: { 
      type: String, 
      required: [true, 'Name is required'], 
      maxLength: [50, `Can't exceed 50 characters`] 
    },
    description: { 
      type: String, 
      required: [true, 'Description is required'], 
      maxLength: [255, `Can't exceed 255 characters`] 
    }
  },
  {
    versionKey: false, 
    timestamps: true  
  }
);

export default model('Category', categorySchema);
