import { createRoot } from "react-dom";
import "./style.scss";

function AdminApp() {
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
    const root = createRoot(document.getElementById("admin-app"));

    root.render(<AdminApp />);
  },
  false
);
