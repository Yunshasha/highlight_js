import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const CodeBlock = ({ language, code }) => {
  const codeBlockRef = useRef(null);

  useEffect(() => {
    hljs.highlightBlock(codeBlockRef.current);
  }, [codeBlockRef]);

  return (
    <pre>
      <code ref={codeBlockRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
