import { Routes, Route } from "react-router-dom";
import Experiment1 from "./pages/Experiment1";
import { useState } from "react";
import Button from "./components/Button";
import { Menu, CodeBrackets } from "iconoir-react";
import Navigation from "./components/Navigation";

function App() {
  const [showCoodeMenu, setShowCodeMenu] = useState(false);
  const [showMenu, setMenu] = useState(false);

  return (
    <div
      className={`${showCoodeMenu ? "coodeMenuIsActive" : ""} ${
        showMenu ? "menuIsActive" : ""
      }  App`}
    >
      <Navigation />
      <Button
        ariaLabel="Show Code"
        className="code_panel_btn circle absolute mt-5 ml-6 z-10"
        onClick={() => setShowCodeMenu(!showCoodeMenu)}
      >
        <CodeBrackets />
      </Button>
      <Button
        ariaLabel="Show Menu"
        className="menu_panel_btn circle absolute mt-5 z-10 right-6"
        onClick={() => setMenu(!showMenu)}
      >
        <Menu />
      </Button>

      <Routes>
        <Route path="/" element={<Experiment1 />} />
        {/* <Route path="/experiment2" element={<Experiment2 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
