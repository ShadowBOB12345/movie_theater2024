import React, { useContext } from 'react'
import AuthContext from "../context/AuthContext";

const RegistrationPage = () => {
  let { registerUser } = useContext(AuthContext);

  return (
    <div>
        <form onSubmit={registerUser} className="register-form">
            <input type="text" name="username" className="form-control" placeholder="Enter Username" />
            <input type="password" name="password" className="form-control" placeholder="Enter Password" />
            <input type="password" name="confirmation" className="form-control" placeholder="Re-enter Password" />
            <input type="email" name="email" className="form-control" placeholder='Enter Email' />
            <input type="submit" className="btn btn-primary register-btn" value='Register'/>
        </form>
    </div>
  )
}

export default RegistrationPage