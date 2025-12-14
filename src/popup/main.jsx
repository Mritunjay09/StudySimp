import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./Popup.jsx";
import "../styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="popup-container">
      <Popup />
    </div>
  </React.StrictMode>
);
