import { connect, set } from "mongoose";

const connectDB = (url: string) => {
  set("strictQuery", true);
  connect(url);
};

export default connectDB;
