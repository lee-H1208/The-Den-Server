import "../css/home.css";
import "../css/logsign.css";
import Logo from "../images/TheDenLogo.png";
import email_icon from "../assets/login/email.png";
import password_icon from "../assets/login/password.png";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const loginUser = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios.get("/");
  };

  return (
    <>
      <a href="/daily">
        <img src={Logo} id="loginLogo" alt="Our Logo" />
      </a>
      <div className="logsignContainer">
        <div className="logHeader">
          <div className="logText">Login</div>
          <div className="logUnderline"></div>
        </div>
        <form onSubmit={loginUser}>
          <div className="logInputs">
            <div className="logInput">
              <img src={email_icon} alt="" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="logInput">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <div className="forgotPassword">
              Lost Password? <span>Click Here!</span>
            </div>
          </div>
          <button type="submit" className="submit">
            Login
          </button>
        </form>
        <div className="bottomLink">
          Don't have an account?{" "}
          <a href="/">
            <span>Sign Up</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
