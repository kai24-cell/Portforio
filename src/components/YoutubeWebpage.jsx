import { Link } from "react-router-dom"; // リンク機能を使うため
import Youtubepage from "../assets/Youtubewebsite.png";

function YoutubeWebpage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>YouTube Webサイト 詳細</h1>
      <img src={Youtubepage} alt="サイト" style={{ width: '100%' }} />
      
      <h2>概要</h2>
      <p>自身のYoutube公式サイトです</p>
      
      <h3>目的</h3>
      <p>他の活動者との差別化のため</p>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/0uqEBGMHC08?si=q0GLAnptWr-gvbEV" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
      </div>

      {/* ホームに戻るボタン */}
      <Link to="/">← ホームに戻る</Link>
    </div>
  );
}

export default YoutubeWebpage;