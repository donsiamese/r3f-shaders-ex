import GLSLCodeBlock from "../components/GLSLCodeBlock";
import FragmentShader from "../shaders/introduction/fragment.glsl?raw";
import VertexShader from "../shaders/introduction/vertex.glsl?raw";
import CanvasViz from "../components/CanvasViz";
import "../../src/style.css";

const Introduction = () => {
  return (
    <div className="Page">
      <div className="Introduction experiment flex">
        <h1 className="absolte mt-24">Experiment 1</h1>
        <div className="code">
          <pre>
            <GLSLCodeBlock
              className="mt-15"
              glslTitle="Vertex Shader"
              glslCode={VertexShader}
            />
            <GLSLCodeBlock
              className="mt-5"
              glslTitle="Fragment Shader"
              glslCode={FragmentShader}
            />
            <GLSLCodeBlock
              className="mt-5"
              tsTitle="Typescript"
              typeScriptCode={CanvasViz.toString()}
            />
          </pre>
        </div>
        <div className="canvas">
          <CanvasViz />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
