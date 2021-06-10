import React from "react";
import ReactDOM from "react-dom";
// import "./styles/tailwind.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PropertyContext from "./store/PropertyContext";

ReactDOM.render(
  <PropertyContext.Provider value={{ properties: null }}>
    <App />
  </PropertyContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();