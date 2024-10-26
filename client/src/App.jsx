import "./App.css";
import { Routes, Route } from "react-router-dom";

//pages
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
