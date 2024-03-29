import "./App.css";
import { code } from "./assets/code";
import CodeBlockBlack from "./components/CodeBlockBlack";
// import CodeBlockLight from "./components/CodeBlockLight";

function App() {
  return (
    <div className="App">
      <div className="App-header">How to use highlight js in React project</div>
      <div className="App-main">
        <div>
          <p>
            the code below shows the{" "}
            <span className="App-code">atom-one-dark.css</span> highlight.js
            provides.
          </p>
          <CodeBlockBlack language="javascript" code={code.code_js} />
        </div>
        {/* <div>
          <p>
            the code below shows the{" "}
            <span className="App-code">atom-one-light.css</span> highlight.js
            provides.
          </p>
          <CodeBlockLight language="javascript" code={code.code_js} />
        </div> */}
      </div>
    </div>
  );
}

export default App;
