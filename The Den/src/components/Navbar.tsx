import { useEffect, useState } from "react";
import "../css/navbar.css";
import Logo from "../images/TheDenLogo.png";
import Clock from "./Clock";

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="navbar">
        <a href="/">
          <img src={Logo} id="logo" alt="Our Logo" />
        </a>
        <a href="/daily" className="tabs" id="firstTab">
          daily
        </a>
        <a href="/weekly" className="tabs">
          weekly
        </a>
        <a href="/study" className="tabs">
          study
        </a>
        <a href="/journal" className="tabs">
          journal
        </a>
        <a href="/finances" className="tabs">
          finances
        </a>
        <div className="navDate">
          <p>
            <Clock id="navClock" />
          </p>
          <p id="navTime">{time.toLocaleTimeString()}</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
