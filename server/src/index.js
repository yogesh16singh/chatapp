import dotenv from "dotenv";
import { httpServer } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const startserver = async () => {
  await connectDB();
  httpServer.listen(process.env.PORT || 8000, () => {
    console.log("server started");
  });
};
startserver();
