import GLSLCodeBlockTwo from "../components/GLSLCodeBlock";
import FragmentShader from "../shaders/experiment1/fragment.glsl?raw";
import VertexShader from "../shaders/experiment1/vertex.glsl?raw";
import CanvasViz from "../components/CanvasViz";
import "../../src/style.css";

const Experiment1 = () => {
  return (
    <div className="Page">
      <div className="Experiment1 experiment flex">
        <h1 className="absolte mt-24">Experiment 1</h1>
        <div className="code">
          <pre>
            <GLSLCodeBlockTwo
              vertexShader={VertexShader}
              fragmetShader={FragmentShader}
              typeScript={CanvasViz.toString()}
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

export default Experiment1;
