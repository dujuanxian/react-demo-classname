import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const styles = {
    class1: "bgYellow",
    class2: "colorBlue"
  };
  const combinedClass = "";

  return (
    <div className="App">
      <h1 className={combinedClass}>Hello World</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
