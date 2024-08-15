import React, { useState } from "react";
import axios from "axios";
import Logo from "../images/TheDenLogo.png";
import toast from "react-hot-toast";
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

  const resetPassword = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { email } = data;
    try {
      const { data } = await axios.post("/forgot", { email });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ email: "" });
        toast.success("Login successful. Welcome!");
        navigate("/reset-password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <img src={Logo} id="loginLogo" alt="Our Logo" />
      <div className="logsignContainer">
        <div className="logHeader">
          <div className="logText">Forgot Password</div>
          <div className="logUnderline"></div>
        </div>
        <form onSubmit={resetPassword}>
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
