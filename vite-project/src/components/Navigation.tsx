import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="flex flex-col menu_panel">
      <ul>
        <li>
          <Link to="/">Experiment 1</Link>
        </li>
        <li>
          <Link to="/experiment2">Experiment 2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
