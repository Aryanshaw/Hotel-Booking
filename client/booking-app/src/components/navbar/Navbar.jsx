import React, { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { SearchContext } from "../../context/SearchContext";
import { RegisterContext } from "../../context/RegisterContext";

const Navbar = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext,RegisterContext);
  // const { user1 } = useContext(RegisterContext);
  // console.log(user1)
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
    <div className="navBar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Book-My-Trip</span>
        </Link>

        {user  ? (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <h4 style={{ fontStyle: "italic" }}>
                {user.username} 
              </h4>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              />
            </div>
          </>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
