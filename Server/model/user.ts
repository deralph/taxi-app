import { Schema, model } from "mongoose";

import bcrypt from "bcryptjs";

export interface Iuser {
  phone: string;
  password: string | any;
  walletPrice: number;
  createdAt: Date;
}

export interface IuserModel extends Iuser {
  // findByCredentials: (email: String,password:string) => any;
  checkPassword: (comparedPassword: string) => boolean;
  createUser: (body: Iuser) => any;
  findOne: (email: string) => any;
}

const userSchema: Schema<IuserModel> = new Schema({
  phone: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },
  walletPrice: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.checkPassword = async function (comparedPassword: string) {
  const isMatch = await bcrypt.compare(comparedPassword, this.password);
  return isMatch;
};

userSchema.methods.createUser = async function (body: Iuser) {
  return await this.create(body);
};
userSchema.methods.findOne = async function (phone: string) {
  return await this.find({ phone });
};

export default model("Users", userSchema);
