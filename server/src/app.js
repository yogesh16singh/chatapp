import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { initializeSocketIO } from "./socket/index.js";
const app = express();
const httpServer = createServer(app);
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
initializeSocketIO(io);
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

export { httpServer };
