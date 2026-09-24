import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ShareExPage from "./components/ShareEXpage";
import Researchpage from "./components/Researchpage";
import OnetapclerSoundpage from "./components/OnetapclerSoundpage";
import YoutubeWebpage from "./components/YoutubeWebpage";
import Skinnaviapage from "./components/Skinnaviapage";
import LongInternpage from "./components/LongIntern";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shareex" element={<ShareExPage />} />
        <Route path="/research" element={<Researchpage />} />
        <Route path="/onetapclersound" element={<OnetapclerSoundpage />} />
        <Route path="/youtube" element={<YoutubeWebpage />} />
        <Route path="/skinnavia" element={<Skinnaviapage />} />
        <Route path="/Longintern" element={<LongInternpage />} />
      </Routes>
    </div>
  );
}

export default App;