import { Request, Response } from "express";
import Unauthorized from "../error/unauthorized";
import user from "../model/user";
import paymentModel from "../model/payment";
import { StatusCodes } from "http-status-codes";
import ride from "../model/ride";

const controlPayment = async (req: Request, res: Response) => {
  const {
    params: { phone },
    body,
  } = req;
  if (phone !== body.phone) {
    throw new Unauthorized("Matric number doesn't match");
  }

  try {
    const User = await user.findOne({ phone });
    console.log(User);

    if (!User) {
      throw new Unauthorized(
        "User not found, Check Matric Number and try again"
      );
    }
    const payment = await paymentModel.create(req.body);
    if (!payment) {
      throw new Unauthorized("Unable to save transaction");
    }
    const walletPrice = Number(User.walletPrice) + Number(payment.amount);
    const updatedWalletPrice = await user.findOneAndUpdate(
      { phone },
      { walletPrice },
      { new: true, runValidators: true }
    );
    if (!updatedWalletPrice) {
      throw new Unauthorized("Unable to update the wallet price transaction");
    }

    res
      .status(StatusCodes.ACCEPTED)

      .json({ phone: User.phone, isPosted: true, sucess: true });
  } catch (e: any) {
    console.log(e.message);
    res.json({ error: e.message });
  }
};

const getPayments = async (req: Request, res: Response) => {
  const {
    params: { phone },
  } = req;

  try {
    const User = await user.findOne({ phone });
    console.log(User);

    if (!User) {
      throw new Unauthorized(
        "User not found, Check Matric Number and try again"
      );
    }
    const Payments = await user.findOne({ phone });
    if (!Payments)
      throw new Unauthorized("couldn't find payments, kindly try again");

    res
      .status(StatusCodes.ACCEPTED)

      .json({
        phone: User.phone,
        Payments,
        isPosted: true,
        sucess: true,
      });
  } catch (e: any) {
    console.log(e.message);
    res.json({ error: e.message });
  }
};
const makeRide = async (req: Request, res: Response) => {
  const {
    params: { phone },
    body,
  } = req;
  if (phone !== body.phone) {
    throw new Unauthorized("Matric number doesn't match");
  }

  try {
    const User = await user.findOne({ phone });
    console.log(User);

    if (!User) {
      throw new Unauthorized(
        "User not found, Check Matric Number and try again"
      );
    }
    const walletPrice = Number(User.walletPrice) - Number(req.body.amount);
    const updatedWalletPrice = await user.findOneAndUpdate(
      { phone },
      { walletPrice },
      { new: true, runValidators: true }
    );
    if (!updatedWalletPrice) {
      throw new Unauthorized("Unable to update the wallet price transaction");
    }
    const Ride = await ride.create(req.body);
    if (!Ride) {
      throw new Unauthorized("Unable to save ride details");
    }

    res
      .status(StatusCodes.ACCEPTED)

      .json({ phone: User.phone, isPosted: true, sucess: true });
  } catch (e: any) {
    console.log(e.message);
    res.json({ error: e.message });
  }
};

const getRide = async (req: Request, res: Response) => {
  const {
    params: { phone },
  } = req;

  try {
    const User = await user.findOne({ phone });
    console.log(User);

    if (!User) {
      throw new Unauthorized(
        "User not found, Check Matric Number and try again"
      );
    }

    const Ride = await ride.find({ phone });
    if (!Ride) {
      throw new Unauthorized("Unable to get ride details");
    }

    res
      .status(StatusCodes.ACCEPTED)

      .json({ ride: Ride, sucess: true });
  } catch (e: any) {
    console.log(e.message);
    res.json({ error: e.message, sucess: false });
  }
};

export default { controlPayment, getPayments, makeRide, getRide };
