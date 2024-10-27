import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
