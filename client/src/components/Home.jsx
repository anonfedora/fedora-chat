import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    socket.current.emit("newUser", {
      userName,
      socketID: socket.id,
    });
    navigate("/chat");
  };

  return (
    <>
      <form className="home__container" onSubmit={handleSubmit}>
        <h2 className="home__header">
          <Link to="/about">
            <p className="banner"> Signin<br></br> AnonFedora</p>
          </Link>
        </h2>

        <div className="circle"></div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          minLength={6}
          name="Username"
          placeholder="username"
          className="username__input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input type="submit" className="home__cta" value="Sign In" />
      </form>
    </>
  );
};

export default Home;
