import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
// const root = ReactDOM.createRoot(rootElement, { identifierPrefix: "yolo-" });

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
