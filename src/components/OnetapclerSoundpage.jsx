import { oneTapClearSoundData, projectPageLabels } from "../data/Data";
import { Link } from "react-router-dom"; // リンク機能を使うため
import OneTapClearSound from "../assets/Onetapsample1.jpg";
function OnetapclerSoundpage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{oneTapClearSoundData.title}</h1>
      <img src={OneTapClearSound} alt={oneTapClearSoundData.imageAlt}  />
      
      <h2>{oneTapClearSoundData.overviewSection}</h2>
      <p>{oneTapClearSoundData.overview}</p>
      <div style={{ whiteSpace: "pre-line" }}>{oneTapClearSoundData.presentation}</div>
      <h3>{oneTapClearSoundData.challengesSection}</h3>
      <div>{oneTapClearSoundData.challenges}</div>
      <h4>{oneTapClearSoundData.roleSection}</h4>
      <p>{oneTapClearSoundData.role}</p>
      <h5>{oneTapClearSoundData.demoSection}</h5>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe width="560" 
        height="315" 
        src={oneTapClearSoundData.videoUrl} 
        title={oneTapClearSoundData.videoTitle} 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>

        </iframe>
      </div>
      

      {/* ホームに戻るボタン */}
      <Link to="/">{projectPageLabels.backToHome}</Link>
    </div>
  );
}

export default OnetapclerSoundpage;