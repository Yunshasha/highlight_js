export const code = {
  code_js: `
    import "./App.css";
    import "highlight.js/styles/atom-one-dark.css";
    import CodeBlock from "./components/CodeBlock";
    
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
              <CodeBlock language="javascript" code={code} />
            </div>
          </div>
        </div>
      );
    }
    
    export default App;
    `,
};
