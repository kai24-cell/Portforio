import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ShareExPage from "./components/ShareEXpage";
import Researchpage from "./components/Researchpage";
import OnetapclerSoundpage from "./components/OnetapclerSoundpage";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shareex" element={<ShareExPage />} />
        <Route path="/research" element={<Researchpage />} />
        <Route path="/onetapclersound" element={<OnetapclerSoundpage />} />
      </Routes>
    </div>
  );
}

export default App;