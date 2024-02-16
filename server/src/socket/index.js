const initializeSocketIO = (io) => {
  return io.on("connection", (socket) => {
    console.log("new user connected");
  });
};
export { initializeSocketIO };
