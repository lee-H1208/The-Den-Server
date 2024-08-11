import "../css/home.css";
import "../css/logsign.css";
import Logo from "../images/TheDenLogo.png";
import user_icon from "../assets/login/person.png";
import email_icon from "../assets/login/email.png";
import password_icon from "../assets/login/password.png";
import { useState } from "react";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <>
      <a href="/daily">
        <img src={Logo} id="loginLogo" alt="Our Logo" />
      </a>
      <div className="logsignContainer">
        <div className="logHeader">
          <div className="logText">Sign Up</div>
          <div className="logUnderline"></div>
        </div>
        <form onSubmit={registerUser}>
          <div className="logInputs">
            <div className="logInput">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
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
          </div>
          <button type="submit" className="submit">
            Sign Up
          </button>
        </form>
        <div className="bottomLink">
          Already have an account?{" "}
          <a href="/login">
            <span>Login</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Register;