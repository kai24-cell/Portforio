import { youtubeData, projectPageLabels } from "../data/Data";
import { Link } from "react-router-dom"; // リンク機能を使うため
import Youtubepage from "../assets/Youtubewebsite.png";

function YoutubeWebpage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{youtubeData.title}</h1>
      <img src={Youtubepage} alt={youtubeData.imageAlt} style={{ width: '100%' }} />
      
      <h2>{youtubeData.overviewSection}</h2>
      <p>{youtubeData.overview}</p>
      
      <h3>{youtubeData.challengesSection}</h3>
      <p>{youtubeData.challenges}</p>
      <h4>{youtubeData.highlightsSection}</h4>
      <p>{youtubeData.highlights}</p>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe width="560" height="315" 
        src={youtubeData.videoUrl} 
        title={youtubeData.videoTitle} 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
      </div>

      {/* ホームに戻るボタン */}
      <Link to="/">{projectPageLabels.backToHome}</Link>
    </div>
  );
}

export default YoutubeWebpage;