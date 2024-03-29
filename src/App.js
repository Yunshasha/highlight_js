import "./App.css";
import "highlight.js/styles/atom-one-dark.css";
import CodeBlock from "./components/CodeBlock";

function App() {
  const code = `function helloWorld() {
    console.log("Hello, world!");
    const arr = [1,2,3]
   }`;
  return (
    <div className="App">
      <div className="App-header">How to use highlight js in React project</div>
      <div className="App-main">
        <CodeBlock language="javascript" code={code} />
      </div>
    </div>
  );
}

export default App;
