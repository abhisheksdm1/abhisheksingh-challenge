import React, { useState } from "react";
import Axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [output, setOutput] = useState("");

  const resigter = () => {
    Axios.post("https://g-challenge.vercel.app/registers", {
      username: username,
      password: password,
      email: email,
    }).then((Response) => {
      console.log(Response);
      setOutput(Response.data.message);
    });
    setEmail("");
    setPassword("");
    setUsername("");

    const timeout = setTimeout(() => {
      setOutput("");
    }, 2000);

    // Clean up the timeout when the component unmounts or when the data changes
    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <>
      <br />
      <div
        style={{
          textAlign: "center",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <h1>Login</h1> */}
        <div
          className="register-wrapper"
          style={{
            height: "250px",
            width: "250px",
            backgroundColor: "#4f46e5",
          }}
        >
          <br></br>
          <div style={{ maginTop: "20px" }}>
            <lable style={{ color: "white" }}>Name</lable>
            <br></br>
            <input
              value={username}
              type="text"
              width="100%"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <lable style={{ color: "white" }}>Email</lable>
            <br></br>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <lable style={{ color: "white" }}>Password</lable>
            <br></br>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div style={{ margin: "20px" }}>
            <button
              style={{
                padding: "5px 20px",
                color: "white",
                backgroundColor: "white",
                color: "#4f46e5",
                border: "none",
              }}
              onClick={resigter}
            >
              Register
            </button>
          </div>
          <br/>
          <h1>{output}</h1>
        </div>
      </div>
      {/* <div className="register-wrapper" style={{ display:'flex' , flexDirection:'column', justifyContent:"center"}}>
        <br></br>
        <div style={{ maginTop: "20px" ,alignItems:'center'  }}>
          <lable>Name</lable>
          <br></br>
          <input
            type="text"
            onChange={(e) => {
                setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <lable>email</lable>
          <br></br>
          <input
            type="email"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <lable>password</lable>
          <br></br>
          <input
            type="password"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div style={{ margin: "20px" }}>
          <button
            style={{
              padding: "10px 30px",
              color: "white",
              backgroundColor: "blue",
              border: "none",
            }}
            onClick={resigter}
          >
            Register
          </button>
        </div>
      </div> */}
    </>
  );
}
