import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false)

  //register a user
  async function RegisterUser(e) {
    e.preventDefault();
    setErrors([]);
    setLoading(true)
    let userDetails = { name, email, phone, password };

    axios
      .post("https://msaadaproject.herokuapp.com/api/register", userDetails)
      .then(function (response) {
        response.data.success && window.location.replace("/login");
        setLoading(false)
        !response.data.success && setErrors(response.data.error);
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="registerWrapper">
      <div className="center">
        <h1>Sign Up</h1>
        <form>
          <div className="txt_field">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            <span className="error-message">{errors.name}</span>
            <label>Name</label>
          </div>

          <div className="txt_field">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              autoComplete="true"
            />
            <span className="error-message">{errors.email}</span>
            <label>Email</label>
          </div>

          <div className="txt_field">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              autoComplete="true"
            />
            <span className="error-message">{errors.phone}</span>
            <label>Phone Number</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="true"
            />
            <span className="error-message">{errors.password}</span>

            <label>Password</label>
          </div>
          <button type="submit" disabled={loading}
            onClick={RegisterUser}
            className="loginBtn"
           
          >{loading && "processing"} {!loading && "Sign up"}</button>
          <div className="signup_link">
            Have an account?
            <Link className="link" to="/login">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
