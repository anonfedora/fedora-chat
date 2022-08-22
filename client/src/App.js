import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import Home from "./components/Home";
import "./index.css";
import ChatPage from "./components/ChatPage";
import About from "./components/About";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const socket = useRef();
  socket.current = io("ws://localhost:8000");
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home socket={socket} />} />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  {" "}
                  <ChatPage socket={socket} />{" "}
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
