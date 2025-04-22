import { createRoot } from "react-dom";
import "./style.css";

function MyFirstApp() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

function HelloWorld() {
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
}

window.addEventListener(
  "load",
  function () {
    const root = createRoot(document.getElementById("my-first-gutenberg-app"));

    root.render(<MyFirstApp />);
  },
  false
);
