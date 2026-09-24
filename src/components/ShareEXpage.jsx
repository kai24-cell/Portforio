import { shareEXData, projectPageLabels } from "../data/Data";
import { Link } from "react-router-dom"; // リンク機能を使うため
import ShareEXpage from "../assets/ShareEX.png";

function ShareExPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{shareEXData.title}</h1>
      <img src={ShareEXpage} alt={shareEXData.imageAlt} style={{ width: '100%' }} />
      
      <h2>{shareEXData.overviewSection}</h2>
      <p>{shareEXData.overview}</p>
      
      <h3>{shareEXData.challengesSection}</h3>
      <p>{shareEXData.challenges}</p>
      
      {/* ホームに戻るボタン */}
      <Link to="/">{projectPageLabels.backToHome}</Link>
    </div>
  );
}

export default ShareExPage;