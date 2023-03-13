import "./App.css";
import { GiFarmer } from "react-icons/gi";

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
    </div>
  );
}

export default App;
