import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorHandler";
import notFound from "./middleware/notFound";
import connectDB from "./connectDB";
import authRouter from "./routes/user";
import paymentRouter from "./routes/payment";
import paymentMiddleware from "./middleware/payment";

dotenv.config();
require("express-async-errors");

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.json({ data: "this is an home page" });
});
app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/payment", paymentMiddleware, paymentRouter);
app.use("/api/v1/payment", paymentRouter);

app.use(errorHandler);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI!);
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
