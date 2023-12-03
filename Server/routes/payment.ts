import express from "express";
const PaymentRouter = express.Router();
import route from "../controller/payment";

const { controlPayment, getPayments, makeRide, getRide } = route;

PaymentRouter.post("/:matricNumber/payment", controlPayment);
PaymentRouter.get("/:matricNumber/getPayment", getPayments);
PaymentRouter.post("/:matricNumber/ride", makeRide);
PaymentRouter.get("/:matricNumber/getRide", getRide);

export default PaymentRouter;
