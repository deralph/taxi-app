import express from "express";
const PaymentRouter = express.Router();
import route from "../controller/payment";

const { controlPayment, getPayments, makeRide, getRide } = route;

PaymentRouter.post("/:phone/payment", controlPayment);
PaymentRouter.get("/:phone/getPayment", getPayments);
PaymentRouter.post("/:phone/ride", makeRide);
PaymentRouter.get("/:phone/getRide", getRide);

export default PaymentRouter;
