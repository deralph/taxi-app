import { Schema, model } from "mongoose";

interface payment {
  phone: string;
  event: string;
  amount: string;
  transactionRef: {
    message: string;
    redirecturl: string;
    reference: string;
    status: string;
    trans: string;
    transaction: string;
    trxref: string;
  };
  createdAt: Date;
}

export interface Ipayment extends payment {
  createUser: (body: payment) => any;
  find: (phone: string) => any;
  findOneAndUpdate: (phone: string) => any;
}

// interface TransactionDocument extends Document, Transaction {}

const paymentSchema = new Schema<Ipayment>({
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  event: { type: String, required: true },
  amount: { type: String, required: true },
  transactionRef: {
    message: { type: String, required: true },
    redirecturl: { type: String, required: true },
    reference: { type: String, required: true },
    status: { type: String, required: true },
    trans: { type: String, required: true },
    transaction: { type: String, required: true },
    trxref: { type: String, required: true },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
paymentSchema.methods.createUser = async function (body: payment) {
  return await this.create(body);
};
paymentSchema.methods.find = async function (phone: string) {
  return await this.find({ phone });
};
// paymentSchema.methods.findOneAndUpdate = async function (phone: string,price:string) {
//   return await this.findOneAndUpdate(
//     {phone },
//     body,
//     { new: true, runValidators: true }
//   );
// };
const paymentModel = model("Transaction", paymentSchema);

export default paymentModel;
