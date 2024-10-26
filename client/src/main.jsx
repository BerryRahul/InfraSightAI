import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//styling
import "./index.css";

//components
import App from "./App.jsx";

//react router dom
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
