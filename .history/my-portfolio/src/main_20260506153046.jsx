import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Kiểm tra xem có đúng là App.jsx không
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
