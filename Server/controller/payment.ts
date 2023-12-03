import { Request, Response } from "express";
import Unauthorized from "../error/unauthorized";
import user from "../model/user";
import paymentModel from "../model/payment";
import { StatusCodes } from "http-status-codes";
import ride from "../model/ride";

const controlPayment = async (req: Request, res: Response) => {
  const {
    params: { matricNumber },
    body,
  } = req;
  if (matricNumber !== body.matricNumber) {
    throw new Unauthorized("Matric number doesn't match");
  }

  try {
    const User = await user.findOne({ matricNumber });
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
      { matricNumber },
      { walletPrice },
      { new: true, runValidators: true }
    );
    if (!updatedWalletPrice) {
      throw new Unauthorized("Unable to update the wallet price transaction");
    }

    res
      .status(StatusCodes.ACCEPTED)

      .json({ matricNumber: User.matricNumber, isPosted: true, sucess: true });
  } catch (e: any) {
    console.log(e.message);
    res.json({ error: e.message });
  }
};

const getPayments = async (req: Request, res: Response) => {
  const {
    params: { matricNumber },
  } = req;

  try {
    const User = await user.findOne({ matricNumber });
    console.log(User);

    if (!User) {
      throw new Unauthorized(
        "User not found, Check Matric Number and try again"
      );
    }
    const Payments = await user.findOne({ matricNumber });
    if (!Payments)
      throw new Unauthorized("couldn't find payments, kindly try again");

    res
      .status(StatusCodes.ACCEPTED)

      .json({
        matricNumber: User.matricNumber,
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
    params: { matricNumber },
    body,
  } = req;
  if (matricNumber !== body.matricNumber) {
    throw new Unauthorized("Matric number doesn't match");
  }

  try {
    const User = await user.findOne({ matricNumber });
    console.log(User);

    if (!User) {
      throw new Unauthorized(
        "User not found, Check Matric Number and try again"
      );
    }
    const walletPrice = Number(User.walletPrice) - Number(req.body.amount);
    const updatedWalletPrice = await user.findOneAndUpdate(
      { matricNumber },
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

      .json({ matricNumber: User.matricNumber, isPosted: true, sucess: true });
  } catch (e: any) {
    console.log(e.message);
    res.json({ error: e.message });
  }
};
const getRide = async (req: Request, res: Response) => {
  const {
    params: { matricNumber },
  } = req;

  try {
    const User = await user.findOne({ matricNumber });
    console.log(User);

    if (!User) {
      throw new Unauthorized(
        "User not found, Check Matric Number and try again"
      );
    }

    const Ride = await ride.find({ matricNumber });
    if (!Ride) {
      throw new Unauthorized("Unable to get ride details");
    }

    res
      .status(StatusCodes.ACCEPTED)

      .json({ matricNumber: User.matricNumber, isPosted: true, sucess: true });
  } catch (e: any) {
    console.log(e.message);
    res.json({ error: e.message });
  }
};

export default { controlPayment, getPayments, makeRide, getRide };
