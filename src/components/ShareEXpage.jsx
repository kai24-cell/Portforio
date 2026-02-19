import { Link } from "react-router-dom"; // リンク機能を使うため
import ShareEXpage from "../assets/ShareEX.png";

function ShareExPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>ShareEX 詳細</h1>
      <img src={ShareEXpage} alt="サイト" style={{ width: '100%' }} />
      
      <h2>概要</h2>
      <p>学習プロセスを記録し、技術者同士で経験を共有するためのポートフォリオWebアプリです。</p>
      
      <h3>苦労した点</h3>
      <p>SpringBootから主キーを指定してデータを取得する処理を実装する際、データベースとの接続やSQLクエリの構築に苦労しました。特に、複数テーブル間の関連付けを正しく処理し、主キーを適切に指定してデータを取得する方法を学ぶ必要がありました。</p>

      {/* ホームに戻るボタン */}
      <Link to="/">← ホームに戻る</Link>
    </div>
  );
}

export default ShareExPage;