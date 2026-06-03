import React, { useState } from "react";

function Login({ setIsLoggedIn }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      username === "admin" &&
      password === "1234"
    ) {

      alert("Login Successful");

      setIsLoggedIn(true);

    } else {

      alert("Wrong Username or Password");

    }

  };

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f2f2f2",
      }}
    >

      <form
        onSubmit={handleLogin}
        style={{
          width: "300px",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0px 0px 10px lightgray",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >

        <h1
          style={{
            textAlign: "center",
          }}
        >
          Login
        </h1>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          style={{
            padding: "10px",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            padding: "10px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Login
        </button>

      </form>

    </div>

  );

}

export default Login;
