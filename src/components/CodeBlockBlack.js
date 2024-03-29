import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const CodeBlockBlack = ({ language, code }) => {
  const codeBlockRef = useRef();

  useEffect(() => {
    hljs.highlightBlock(codeBlockRef.current);
  }, []);

  return (
    <pre>
      <code ref={codeBlockRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlockBlack;
