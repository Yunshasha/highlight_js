import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css";

function CodeBlockLight({ language, code }) {
  //   const codeBlockRef = useRef(null);
  //   useEffect(() => {
  //     hljs.highlightBlock(codeBlockRef.current);
  //   }, [codeBlockRef]);
  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}

export default CodeBlockLight;
