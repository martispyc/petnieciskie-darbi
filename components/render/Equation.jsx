import { MathJax, MathJaxContext } from "better-react-mathjax";
import React from "react";

function Equation({children}) {
  const config = {
    loader: { load: ["input/asciimath"] },
  };
  return (
    <MathJaxContext config={config}>
      <MathJax>{children}</MathJax>
    </MathJaxContext>
  );
}

export default Equation;
