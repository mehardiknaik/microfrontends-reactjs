import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

window.renderHeader = (containerId, history) => {
  const container = document.getElementById(containerId);

  const root = createRoot(container);

  root.render(<App history={history} />);
};

window.unmountHeader = (containerId) => {
  const container = document.getElementById(containerId);

  const root = createRoot(container);

  root.unmount();
};

if (!document.getElementById("Header-container")) {
  const container = document.getElementById("root");

  const root = createRoot(container);

  root.render(<App />);
}
