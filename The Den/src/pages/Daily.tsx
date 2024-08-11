import Navbar from "../components/Navbar";
import Weather from "../components/Weather";
import MoodBar from "../components/MoodBar";
import "../css/daily.css";

const Daily = () => {
  return (
    <>
      <Navbar />
      <div className="dailyContainer">
        <div id="leftDaily">
          <Weather />
          <MoodBar />
        </div>
        <div id="rightDaily"></div>
      </div>
    </>
  );
};

export default Daily;
