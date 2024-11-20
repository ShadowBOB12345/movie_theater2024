import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <div>
      <form onSubmit={loginUser} className="login-form">
        <input type="text" name="username" className="form-control" placeholder="Enter Username" /> 
        <input type="password" name="password" className="form-control" placeholder="Enter Password" />
        <input type="submit" className="btn btn-primary login-btn" value="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
