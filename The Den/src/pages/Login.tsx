import "../css/home.css";
import "../css/logsign.css";
import Logo from "../images/TheDenLogo.png";
import email_icon from "../assets/login/email.png";
import password_icon from "../assets/login/password.png";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

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

  const loginUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", { email, password });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ email: "", password: "" });
        toast.success("Login successful. Welcome!");
        navigate("/daily");
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
              Lost Password?{" "}
              <a href="/forgot">
                <span>Click Here!</span>
              </a>
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
