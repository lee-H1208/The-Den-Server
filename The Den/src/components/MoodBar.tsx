import AngryIcon from "../assets/mood/angry.png";
import HappyIcon from "../assets/mood/happy.png";
import UpsetIcon from "../assets/mood/sad.png";
import "../css/daily.css";

const MoodBar = () => {

  return (
    <div className="moodContainer">
      <p>How are you feeling today?</p>
      <div className="moodButtonDiv">
        <button className="moodButton">
          <img src={AngryIcon} alt="angry bear" id="angry" />
        </button>
        <button className="moodButton">
          <img src={UpsetIcon} alt="upset bear" id="upset" />
        </button>
        <button className="moodButton">
          <img src={HappyIcon} alt="happy bear" id="happy" />
        </button>
      </div>
    </div>
  );
};

export default MoodBar;
