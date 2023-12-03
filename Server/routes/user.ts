import express from "express";
const authRouter = express.Router();
import route from "../controller/user";

const { register, login, logout } = route;

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.get("/:matricNumber", logout);
// router.delete("/delete/:userId", Delete);

export default authRouter;
