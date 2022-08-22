const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const socketIO = require("socket.io")(8000, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
dotenv.config();
const uri = process.env.MONGO;

let users = [];

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Mongodb connected");
  } catch (error) {
    throw error;
  }
};
//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("message", (data) => {
    socketIO.emit("messageResponse", data);
  });

  socket.on("newUser", (data) => {
    users.push(data);

    socketIO.emit("newUserResponse", users);
  });

  socket.on("typing", (data) => socket.broadcast.emit("typingResponse", data));

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");

    users = users.filter((user) => user.socketID !== socket.id);

    socketIO.emit("newUserResponse", users);
    socket.disconnect();
  });
});
//Routes
app.get("/api", (req, res) => {
  res.status(200).json({
    message: "This is the api endpoint",
  });
});

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 5000;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  connect();
  console.log(`Server running on port ${PORT}`);
});
