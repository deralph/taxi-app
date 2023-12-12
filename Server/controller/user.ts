import { StatusCodes } from "http-status-codes";
import BadRequest from "../error/badRequest";
import Unauthorized from "../error/unauthorized";
import User, { Iuser } from "../model/user";
import { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  if (!user) throw new Unauthorized("phone already exist");

  res
    .status(StatusCodes.ACCEPTED)

    .json({ phone: user.phone, isPosted: true, sucess: true });
};

const login = async (req: Request, res: Response) => {
  const { phone, password }: Iuser = req.body;
  console.log({ phone, password });

  if (!phone || !password) {
    console.log("it happened here");
    throw new BadRequest("email and password can't be vacant");
  }
  const user = await User.findOne({ phone });
  console.log(user);

  if (!user) throw new Unauthorized("invalid credentials");

  const checkPassword = user.checkPassword(password);
  console.log(checkPassword);

  if (!checkPassword) {
    throw new Unauthorized("invalid credentials");
  }

  res
    .status(StatusCodes.ACCEPTED)

    .json({ user, isPosted: true, sucess: true });
};

const logout = async (req: Request, res: Response) => {
  return res
    .status(StatusCodes.ACCEPTED)

    .json({ msg: "user logged out", sucess: true });
};

const getUser = async (req: Request, res: Response) => {
  const {
    params: { phone },
  } = req;
  console.log({ phone });

  if (!phone) {
    throw new BadRequest("matric Number not present");
  }
  const user = await User.findOne({ phone });
  console.log(user);

  if (!user) throw new Unauthorized("invalid credentials");

  res
    .status(StatusCodes.ACCEPTED)

    .json({ user, isPosted: true, sucess: true });
};

export default {
  register,
  login,
  logout,
  getUser,
};
