import { Schema, model } from "mongoose";

export interface ride {
  phone: string;
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

const rideSchema: Schema<rideModel> = new Schema({
  phone: {
    type: String,
    required: true,
    trim: true,
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

rideSchema.methods.createUser = async function (body: ride) {
  return await this.create(body);
};
rideSchema.methods.findOne = async function (phone: string) {
  return await this.find({ phone });
};

export default model("ride", rideSchema);
