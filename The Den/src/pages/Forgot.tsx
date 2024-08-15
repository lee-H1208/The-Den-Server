import React, { useState } from "react";
import Logo from "../images/TheDenLogo.png";
import email_icon from "../assets/login/email.png";
import "../css/logsign.css";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <>
      <img src={Logo} id="loginLogo" alt="Our Logo" />
      <div className="logsignContainer">
        <div className="logHeader">
          <div className="logText">Forgot Password</div>
          <div className="logUnderline"></div>
        </div>
        <form>
          <div className="logInputs">
            <div className="logInput">
              <img src={email_icon} alt="" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <p className="forgotText">
              We'll send a verification code to this email if it matches an
              existing account.
            </p>
          </div>

          <button type="submit" className="submit">
            Next
          </button>
          <button onClick={() => navigate("/login")} className="back">
            Back
          </button>
        </form>
      </div>
    </>
  );
};

export default Forgot;
