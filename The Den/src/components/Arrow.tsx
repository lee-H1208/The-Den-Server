import RightArr from "../images/rightarrow.png";
import { useNavigate } from "react-router-dom";

const Arrow = () => {
  let navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/daily")} className="homeButton">
        <img id="arr" src={RightArr} alt="Arrow" />
      </button>
    </>
  );
};

export default Arrow;
