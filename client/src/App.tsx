import { useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";
function App() {
  const socket = io("https://478n96-8080.csb.app");

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
