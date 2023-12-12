import { Request, Response } from "express";
import Unauthorized from "../error/unauthorized";
import user from "../model/user";

const paymentMiddleware = async (req: Request, res: Response) => {
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
    if (!User) throw new Unauthorized("User not found try again later");
  } catch (e: any) {
    console.log(e.message);
    res.json({ error: e.message });
  }
};

export default paymentMiddleware;
