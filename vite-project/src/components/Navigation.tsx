import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ showDocumentation, setShowDocumentation }) => {
  return (
    <nav className="flex flex-col menu_panel">
      <ul>
        <li onClick={() => setShowDocumentation(!showDocumentation)}>
          <span>Documentation</span>
        </li>
        <li>
          <Link to="/">Introduction</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
