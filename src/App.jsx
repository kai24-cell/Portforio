import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ShareExPage from "./components/ShareEXpage";
import Researchpage from "./components/Researchpage";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shareex" element={<ShareExPage />} />
      </Routes>
    </div>
  );
}

export default App;