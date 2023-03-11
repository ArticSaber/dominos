import "./Master.css";
import pizza from "../assets/pizza.png";

function Master() {
  return (
    <div className="big-main">
      <div className="big-text top">
        Do good. <br /> Be nice.
      </div>
      <img className="big-img" src={pizza} alt="pizza" />
      <div className="container">
        <div className="big-text bottom">
          Order pizza. <br /> Repeat...
        </div>
      </div>
    </div>
  );
}

export default Master;
