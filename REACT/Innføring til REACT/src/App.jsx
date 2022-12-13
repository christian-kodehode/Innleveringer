import { useState } from "react";
import reactLogo from "./assets/react.svg";

// CSS
import "./App.css";

/**
 * Main component
 */
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="newh1">Test page</h1>

      <Velkommen navn="Therese" />
      <Velkommen navn="Christian" />

      <NewComponent>
        <p className="newP">Underelement 1</p>
        <p className="newP">Underelement 2</p>
        <p className="newP">Underelement 3</p>
      </NewComponent>
    </div>
  );
}

/**
 * COMPONENT WITH CHILDREN
 */

function NewComponent(props) {
  return <div>{props.children}</div>;
}

/**
 * COMPONENT WITH HTML ATTRIBUTES
 */

function Velkommen(props) {
  const { navn } = props;
  return <h2 className={"border"}>Velkommen, {navn}</h2>;
}

export default App;
