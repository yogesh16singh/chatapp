import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import passport from "passport";
import cors from "cors";
import session from "express-session";
import userRouter from "./routes/auth/user.routes.js";

import { initializeSocketIO } from "./socket/index.js";
const app = express();
const httpServer = createServer(app);
dotenv.config({
  path: "./.env",
});
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.set("io", io);
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  }),
);
app.use(express.json());

// required for passport
app.use(
  session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  }),
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

initializeSocketIO(io);
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.use("/api/v1/users", userRouter);

export { httpServer };
