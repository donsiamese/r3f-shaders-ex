import VertexShader from "./shaders/vertex.glsl";
import FragmentShader from "./shaders/fragment.glsl";

const Code = () => {
  return (
    <div>
      <pre>
        <code>
          <FragmentShader />
          <VertexShader />
        </code>
      </pre>
    </div>
  );
};

export default Code;
