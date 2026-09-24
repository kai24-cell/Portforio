import { skinnaviaData, projectPageLabels } from "../data/Data";
import { Link } from "react-router-dom"; // リンク機能を使うため
import SkinnaviaImage from "../assets/Skinnaviasample1.jpg";
function Skinnaviapage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{skinnaviaData.title}</h1>
      <img src={SkinnaviaImage} alt={skinnaviaData.imageAlt} style={{ width: '100%' }} />
      <h2>{skinnaviaData.overviewSection}</h2>
      <p>{skinnaviaData.overview}</p>
      
      <h3>{skinnaviaData.challengesSection}</h3>
      <p>{skinnaviaData.challenges}</p>
      <h4>{skinnaviaData.roleSection}</h4>
      <p>{skinnaviaData.role}</p>
    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe width="315" height="576" 
        src={skinnaviaData.videoUrl} 
        title={skinnaviaData.videoTitle} frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>
      {/* ホームに戻るボタン */}
      <Link to="/">{projectPageLabels.backToHome}</Link>
    </div>
  );
}

export default Skinnaviapage;