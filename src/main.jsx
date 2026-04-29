import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// React app ko HTML ke root div me inject karta hai
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);