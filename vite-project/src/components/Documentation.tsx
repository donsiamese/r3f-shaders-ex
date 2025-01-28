import GLSLCodeBlock from "../components/GLSLCodeBlock";
import values from "../assets/variables.glsl";
import Resources from "../assets/Resources";
import Functions from "../assets/Functions";
import "./Documentation.css";

const Documentation = () => {
  return (
    <div className="Documentation relative">
      <h1 className="mt-15">Documentation</h1>
      <div className="documentation-content">
        <h2>Resources</h2>
        <Resources />
        <h2>Functions</h2>
        <p>The most used functions</p>
        <Functions />
        <GLSLCodeBlock glslCode={values} glslTitle="Variables" />
        {/* <h2>Variables</h2>
        <GLSLCodeBlock vertexShader={values} showTitile={false} />
        <h2>Variables</h2>
        <GLSLCodeBlock vertexShader={values} showTitile={false} />
        <h2>Variables</h2>
        <GLSLCodeBlock vertexShader={values} showTitile={false} /> */}
      </div>
    </div>
  );
};

export default Documentation;
