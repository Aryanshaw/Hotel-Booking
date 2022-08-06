import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "../../../../../AdminSide/admin/src/context/RegisterContext";
// import { AuthContext } from "../../context/AuthContext";
import "./register.css";
const Register = () => {
  const [credentials, setCredentials] = useState({
    name: undefined,
    lastname: undefined,
    username: undefined,
    email: undefined,
    password: undefined,
    confrimpassword: undefined,
  });

  const { loading, error, dispatch } = useContext(RegisterContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
     dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      console.log("logged in")
      navigate("/login");
    } catch (e) {
      dispatch({ type: "REGISTER_FAILURE", payload: e.response.data });
      alert(e.message)
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <form className="form">
          <input
            className="input"
            id="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            className="input"
            id="lastname"
            placeholder="last name"
            onChange={handleChange}
          />
          <input
            className="input"
            id="username"
            placeholder="username"
            onChange={handleChange}
          />
          <input
            className="input"
            id="email"
            placeholder="email"
            type="email"
            onChange={handleChange}
          />
          <input
            className="input"
            id="password"
            placeholder="password"
            type="password"
            onChange={handleChange}
          />
          <input
            className="input"
            id="confrimpassword"
            placeholder="confirm password"
            type="password"
            onChange={handleChange}
          />
          <span className="agreement">
            By creating an account,I consent to the processing of my personal
            data in accordance with the <b>Privacy Policy</b>
          </span>
          <button className="button" disabled={loading} onClick={handleClick}>
            CREATE AN ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
