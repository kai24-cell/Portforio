import { Link } from "react-router-dom"; // リンク機能を使うため

function Researchpage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>研究 詳細</h1>
      <img src="https://placehold.co/600x400" alt="デモ画面" style={{ width: '100%' }} />
      
      <h2>概要</h2>
      <p>本研究では、従来の監視ツールに代わる新しい異常検知手法を提案する。</p>
      
      <h3>目的</h3>
      <p>従来の閾値ベースの手法では、特定の条件を満たすデータを異常として検出するが、本研究では機械学習モデルを活用し、より柔軟かつ精度の高い異常検知を実現することを目指す。</p>

      {/* ホームに戻るボタン */}
      <Link to="/">← ホームに戻る</Link>
    </div>
  );
}

export default Researchpage;