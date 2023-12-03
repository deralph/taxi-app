import { Request, Response } from "express";
import Unauthorized from "../error/unauthorized";
import user from "../model/user";

const getPayments = async (req: Request, res: Response) => {
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
    if (!User) throw new Unauthorized("User not found try again later");
  } catch (e: any) {
    console.log(e.message);
    res.json({ error: e.message });
  }
};

export default getPayments;
