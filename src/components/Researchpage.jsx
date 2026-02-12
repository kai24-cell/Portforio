import { Link } from "react-router-dom"; // リンク機能を使うため

function Researchpage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>研究 詳細</h1>
      <img src="https://placehold.co/600x400" alt="デモ画面" style={{ width: '100%' }} />
      
      <h2>概要</h2>
      <p>従来の監視ツールでは閾値ベースで異常を検出するが、本研究では異常検知モデルを活用し、より柔軟な監視を実現することを目標としている</p>
      
      <h2>デモ動画</h2>
      <p>ここにYouTubeの埋め込みや動画ファイルを置けます。</p>

      {/* ホームに戻るボタン */}
      <Link to="/">← ホームに戻る</Link>
    </div>
  );
}

export default Researchpage;