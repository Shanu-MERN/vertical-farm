import "./App.css";
import { GiFarmer } from "react-icons/gi";
import masterimg from "./assets/test.png";
import { FaLeaf } from "react-icons/fa";
import { GiChestnutLeaf } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="logo">
          <GiFarmer className="logo-icon" />
          Vertical Farm
        </div>
        <div className="nav-content">
          <div className="nav-item nav-item-active">Solution</div>
          <div className="nav-item">Department</div>
          <div className="nav-item">Farming Method</div>
          <div className="nav-item">Company</div>
          <div className="nav-item">About</div>
        </div>
        <div className="nav-buttons">
          <div className="button trial">Start Free Trial</div>
          <div className="button account">Account</div>
        </div>
      </div>
      <div className="master">
        <div className="left">
          <div className="title">
            Fresh, Sustainable, <br />
            Plant <span style={{ fontWeight: "600" }}>Grow Vertically</span>
            <br />
            in{" "}
            <span
              style={{
                fontWeight: "600",
                backgroundColor: "var(--ascent-secondary)",
                color: "var(--bg)",
              }}
            >
              Urban Areas
            </span>
          </div>
          <div className="desc">
            Our vertical farming startup brings sustainable, locally grown
            produce to urban areas. With our innovative technology, we're
            revolutionizing the way. we grow and consume fresh food.
          </div>
          <div className="button-container">
            <div className="button start">Start Now</div>
            <div className="button how">HOW IT WORKS?</div>
            <div className="button overlap1"></div>
            <div className="button overlap2"></div>
            <div className="button overlap3"></div>
          </div>
        </div>
        <div className="right">
          <img src={masterimg} alt="Master art" className="master-image" />
        </div>
      </div>
    </div>
  );
}

export default App;
