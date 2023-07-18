import "./App.css";
import Practice from "./Pages/Practice";
import { Routes, Route } from "react-router-dom";
import Rank from "./Pages/Rank";
import History from "./Pages/History";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Practice />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/history" element={<History />} />
      </Routes>
      
    </div>
  );
}

export default App;
