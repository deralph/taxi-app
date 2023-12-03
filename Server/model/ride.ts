import { Schema, model } from "mongoose";

export interface ride {
  matricNumber: string;
  location: string | any;
  price: number;
  createdAt?: Date;
}

export interface rideModel extends ride {
  // findByCredentials: (email: String,password:string) => any;
  checkPassword: (comparedPassword: string) => boolean;
  createUser: (body: ride) => any;
  findOne: (email: string) => any;
}

const userSchema: Schema<rideModel> = new Schema({
  matricNumber: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  location: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.createUser = async function (body: ride) {
  return await this.create(body);
};
userSchema.methods.findOne = async function (matricNumber: string) {
  return await this.find({ matricNumber });
};

export default model("Users", userSchema);
