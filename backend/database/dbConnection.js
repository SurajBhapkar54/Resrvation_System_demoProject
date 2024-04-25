import mongoose from "mongoose";
export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      dbName: "Details",
    })
    .then(() => {
      console.log("Connected to Database!");
    })
    .catch((err) => {
      console.log(`Error in connecting to Database! ${err}`);
    });
};
