import React, { useState } from "react";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleTyping = () => {
    socket.current.emit(
      "typing",
      `${localStorage.getItem("userName")} is typing`
    );
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
      socket.current.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };
  return (
    <>
      <div className="chat__footer">
        <form onSubmit={handleSendMessage} className="form">
          {" "}
          <input
            type="text"
            className="message"
            placeholder="Write message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleTyping}
          />
          <input type="submit" className="sendBtn" value="Send" />
        </form>
      </div>
    </>
  );
};

export default ChatFooter;
