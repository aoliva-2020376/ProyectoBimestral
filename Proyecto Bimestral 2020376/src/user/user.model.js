import { Schema, model } from 'mongoose';

const userSchema = Schema(
  {
    name: { 
      type: String, 
      required: [true, 'Name is required'], 
      maxLength: [25, `Can't exceed 25 characters`] 
    },
    surname: { 
      type: String, 
      required: [true, 'Surname is required'], 
      maxLength: [25, `Can't exceed 25 characters`] 
    },
    username: { 
      type: String, 
      required: [true, 'Username is required'], 
      unique: [true, 'Username is already taken'], 
      lowercase: true, 
      maxLength: [15, `Can't exceed 15 characters`] 
    },
    email: { 
      type: String, 
      required: [true, 'Email is required'], 
      unique: [true, 'Email is already registered']
    },
    password: { 
      type: String, 
      required: [true, 'Password is required'], 
      minLength: [8, 'Password must be at least 8 characters'], 
      maxLength: [100, `Can't exceed 100 characters`] 
    },
    profilePicture: { 
      type: String 
    },
    phone: { 
      type: String, 
      required: [true, 'Phone is required'], 
      minLength: [8, 'Phone must be at least 8 characters'], 
      maxLength: [15, 'Phone must not exceed 15 characters']
    },
    role: { 
      type: String, 
      required: [true, 'Role is required'], 
      uppercase: true, 
      enum: ['ADMIN', 'CLIENT'] 
    }
  },
  {
    versionKey: false, 
    timestamps: true  
  }
);

// Modify toJSON -> toObject to exclude certain fields in response
userSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject();
  return user;
};

export default model('User', userSchema);
