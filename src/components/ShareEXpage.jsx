import { Link } from "react-router-dom"; // リンク機能を使うため
import ShareEXpage from "../assets/ShareEX.png";

function ShareExPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>ShareEX 詳細</h1>
      <img src={ShareEXpage} alt="サイト" style={{ width: '100%' }} />
      
      <h2>概要</h2>
      <p>学習プロセスを記録し、技術者同士で経験を共有するためのポートフォリオWebアプリです。</p>
      
      <h2>デモ動画</h2>
      <p>ここにYouTubeの埋め込みや動画ファイルを置けます。</p>

      {/* ホームに戻るボタン */}
      <Link to="/">← ホームに戻る</Link>
    </div>
  );
}

export default ShareExPage;