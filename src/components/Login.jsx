import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toogleContext } from "../App";
import Axios from "axios";
import "../App.css";

export default function Login() {
  const navigate = useNavigate();
  //     const [name,setName]=useState('');
  //     const [password,setPassword]=useState('');
  //     const [a,setA]=useState(0);
  const { toogle1, setToogle1, toogle2, setToogle2 } =
    useContext(toogleContext);

  //    const arr={
  //     'name':'abhishek',
  //     'password':'abhishek'
  //    }

  //    function abc()
  //   {
  //     if(arr.name===name && password===arr.password)
  //     {
  //         setA(1);
  //         navigate('/LandingPage');
  //         setToogle2((prev)=>!prev)
  //         setToogle1((prev)=>!prev)
  //     }

  //   }

  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState("");
  const login = () => {
    Axios.post("https://g-challenge.vercel.app/login", {
      username: username,
      password: password,
    }).then((Response) => {
      console.log(Response);
      setOutput(Response.data.message);
      if (Response.data.message === "logged in sucessfully") {
        navigate("/LandingPage");
        setToogle2((prev) => !prev);
        setToogle1((prev) => !prev);
    } else if(Response.data.message === "inncorrect name and password") {
      setName("");
      setPassword("");
      const timeout = setTimeout(() => {
        setOutput("");
      }, 2000);

      // Clean up the timeout when the component unmounts or when the data changes
      return () => {
        clearTimeout(timeout);
      };
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    });
    
    
  };

  return (
    // <div style={{margin:'20px',width:'100%',height:"100%", display:'flex', justifyContent:'center' , alignItems:'center' ,flexDirection:'column' }}>

    //     <input style={{border:"1px solid black", borderRadius:'20px' ,paddingLeft:'10px' ,marginBottom:'10px' }} type="text" onChange={(e)=>{ setName(e.target.value);}} placeholder='username'/>
    //     <br/>
    //     <input  style={{border:"1px solid black", borderRadius:'20px' ,paddingLeft:'10px' }} type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'/>
    //     <br/>

    //     <button  onClick={abc} style={{background:"#4f46e5", color:"white" ,padding:"5px 15px 5px 15px" , borderRadius:"10%"}} >Login</button>
    //    {
    //     (a===1)?
    //         <div>Logined</div>
    //     :
    //         <div>Not loginned</div>
    // }

    // </div>\

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
            height: "200px",
            width: "250px",
            backgroundColor: "#4f46e5",
          }}
        >
          <br></br>
          <div style={{ maginTop: "20px" }}>
            <lable style={{ color: "white" }}>Name</lable>
            <br></br>
            <input
              type="text"
              width="100%"
              value={username}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <lable style={{ color: "white" }}>password</lable>
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
              onClick={login}
            >
              Login
            </button>
          </div>
          <br/>
          <h1>{output}</h1>
        </div>
      </div>
    </>
  );
}
