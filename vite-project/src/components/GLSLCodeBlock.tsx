import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import useGlobalState from "./store";
import "./GLSLCodeBlock.css";

interface GLSLCodeBlockProps {
  glslCode?: string;
  typeScriptCode?: string;
  className?: string;
  glslTitle?: string;
  tsTitle?: string;
  showTitile?: boolean;
}

const GLSLCodeBlock = ({
  glslCode,
  typeScriptCode,
  className,
  showTitile,
  glslTitle,
  tsTitle,
}: GLSLCodeBlockProps) => {
  const { showGLSL, showTS } = useGlobalState();
  return (
    <section className={`GLSLCodeBlock ${className}`}>
      {showGLSL && (
        <>
          {glslCode ? (
            <div className="mt-5">
              {showTitile ? null : (
                <h2 className="mb-2">
                  {glslTitle ? glslTitle : "Vertex Shader"}
                </h2>
              )}

              <SyntaxHighlighter
                language="glsl"
                style={dracula}
                code={glslCode}
              />
            </div>
          ) : null}
        </>
      )}

      {showTS && (
        <>
          {typeScriptCode ? (
            <div className="mt-5">
              {showTitile ? null : (
                <h2 className="mb-2">
                  {tsTitle ? tsTitle : "Typescript Code"}
                </h2>
              )}
              <SyntaxHighlighter
                language="typescript"
                style={dracula}
                code={typeScriptCode}
              />
            </div>
          ) : null}
        </>
      )}
    </section>
  );
};

export default GLSLCodeBlock;
