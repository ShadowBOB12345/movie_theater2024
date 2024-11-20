import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div className="header">
      <div className="logo-title">
        <Link to="/">
          <h1>Movie Theater</h1>
        </Link>
      </div>
      <div className="user">
        {user && <p>Hello <Link className="username" to={"/profile"}>{user.username}</Link></p>}
        {user ? (
          <p className="logout-btn" onClick={logoutUser}>Logout</p>
        ) : (
          <div className="login-register">
            <Link to="/login" className="login">Login</Link>
            <Link to="/register" className="register">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
