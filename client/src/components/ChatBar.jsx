import React, { useEffect, useState } from "react";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.current.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);
  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        {users.length && users.length > 1 ? (
          <div className="chat__users">
            {users.map((user) => (
              <p key={user.socketID}>{user.userName}</p>
            ))}
          </div>
        ) : (
          <div className="chat__users">
            <p>Searching Users...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBar;
