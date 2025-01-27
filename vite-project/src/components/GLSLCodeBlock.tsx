import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "./Button";
import "./GLSLCodeBlock.css";
import { useState } from "react";

interface GLSLCodeBlockProps {
  vertexShader?: string;
  fragmetShader?: string;
  typeScript?: string;
}

const GLSLCodeBlock = ({
  vertexShader,
  fragmetShader,
  typeScript,
}: GLSLCodeBlockProps) => {
  const [showGLSL, setShowGLSL] = useState(true);
  const [showTS, setShowTS] = useState(false);

  return (
    <section className="GLSLCodeBlock mt-15">
      <div className="language-buttons flex justify-between fixed top-5 left-20 z-10">
        <Button
          className={`circle ml-1 ${showGLSL ? "" : "inactive"}`}
          onClick={() => setShowGLSL(!showGLSL)}
        >
          GLSL
        </Button>
        <Button
          className={`circle ml-3 ${showTS ? "" : "inactive"}`}
          onClick={() => setShowTS(!showTS)}
        >
          TS
        </Button>
      </div>

      {showGLSL && (
        <>
          <div className="mt-5">
            <h2>Vertex Shader</h2>

            <SyntaxHighlighter
              language="glsl"
              style={dracula}
              code={vertexShader}
            />
          </div>

          <div className="mt-5">
            <h2>Fragment Shader</h2>
            <SyntaxHighlighter
              language="glsl"
              style={dracula}
              code={fragmetShader}
            />
          </div>
        </>
      )}

      {showTS && (
        <div className="mt-5">
          <h2>Typescript</h2>
          <SyntaxHighlighter
            language="typescript"
            style={dracula}
            code={typeScript}
          />
        </div>
      )}
    </section>
  );
};

export default GLSLCodeBlock;
