import React, { useContext } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../AdminSide/admin/src/context/AuthContext";
import { RegisterContext } from "../../../../../AdminSide/admin/src/context/RegisterContext";

const Home = () => {
  const { user, dispatch } = useContext(AuthContext, RegisterContext);

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch({ type: "LOGOUT" });
    try {
      navigate("/");
      console.log("logged out");
    } catch (e) {
      dispatch({ type: "LOGIN_FAILURE", payload: e.response.data });
    }
  };

  return (
    <>
      {!user ? (
        <>
          <div className="mainContainer">
            <h1>Login or Reggister as Admin</h1>
            <div className="Container">
              <Link to="/login">
                <button className="loginBtn">Login</button>
              </Link>
              <Link to="/register">
                <button className="registerBtn">Register</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="main">
          <div className="nav">
            <button className="navLogut" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div className="mainContainer">
            <div className="Container">
              {/* <span>hello</span> */}
              <Link to="/newHotel">
                <button className="loginBtn">Create hotel</button>
              </Link>
              <Link to="/newRoom">
                <button className="loginBtn">Create Room</button>
              </Link>
              <Link to="/datatable">
                <button className="loginBtn">View hotels</button>
              </Link>
              <Link to="/RoomData">
                <button className="loginBtn">View Rooms</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
