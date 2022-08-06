import React, { useState, useContext } from "react";
import "./login.css";
import { AuthContext } from "../../../../../AdminSide/admin/src/context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [credentials, setCredentials] = useState({
    usernames: undefined,
    password: undefined,
  });

  const {loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()


  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
     dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/")
    } catch (e) {
      dispatch({ type: "LOGIN_FAILURE", payload: e.response.data });
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="lInput"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="lInput"
          onChange={handleChange}
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        <span className="forgotPassword">FORGOT PASSWORD? </span>
        <Link to="/register" >
        <span className="forgotPassword">Create a new account</span>
        </Link>
        

        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
