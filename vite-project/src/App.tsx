import { Routes, Route } from "react-router-dom";
import Introduction from "./pages/Introduction";
import { useState } from "react";
import Button from "./components/Button";
import { Menu, CodeBrackets, Xmark } from "iconoir-react";
import Navigation from "./components/Navigation";
import Documentation from "./components/Documentation";
import useGlobalState from "./components/store";

function App() {
  const [showCoodeMenu, setShowCodeMenu] = useState(false);
  const [showMenu, setMenu] = useState(false);
  const [showDocumentation, setShowDocumentation] = useState(true);
  const { showGLSL, setShowGLSL } = useGlobalState();
  const { showTS, setShowTS } = useGlobalState();

  return (
    <div
      className={`${showCoodeMenu ? "coodeMenuIsActive" : ""} ${
        showMenu ? "menuIsActive" : ""
      } ${showDocumentation ? "documentationIsActive" : ""}  App`}
    >
      <Documentation />
      <Navigation
        showDocumentation={showDocumentation}
        setShowDocumentation={setShowDocumentation}
      />
      {!showDocumentation ? (
        <Button
          className="circle absolute mt-5 ml-6 z-8"
          onClick={() => setShowDocumentation(!showDocumentation)}
        >
          <Xmark />
        </Button>
      ) : null}

      {!showCoodeMenu ? (
        <>
          <Button
            className={`circle show-code mt-5 ml-20 absolute z-8 ${
              showGLSL ? "" : "inactive"
            }`}
            onClick={() => setShowGLSL(!showGLSL)}
          >
            GLSL
          </Button>
          <Button
            className={`circle show-code mt-5 ml-34 absolute z-8 ${
              showTS ? "" : "inactive"
            }`}
            onClick={() => setShowTS(!showTS)}
          >
            TS
          </Button>
        </>
      ) : null}
      <Button
        ariaLabel="Show Code"
        className="code_panel_btn circle absolute mt-5 ml-6 z-4"
        onClick={() => setShowCodeMenu(!showCoodeMenu)}
      >
        <CodeBrackets />
      </Button>
      <Button
        ariaLabel="Show Menu"
        className="menu_panel_btn circle absolute mt-5 z-3 right-6"
        onClick={() => setMenu(!showMenu)}
      >
        <Menu />
      </Button>

      <Routes>
        <Route path="/" element={<Introduction />} />
        {/* <Route path="/experiment2" element={<Experiment2 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
