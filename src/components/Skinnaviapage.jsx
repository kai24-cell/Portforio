import { Link } from "react-router-dom"; // リンク機能を使うため
import SkinnaviaImage from "../assets/Skinnaviasample1.jpg";
function Skinnaviapage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>スキンナビア詳細</h1>
      <img src={SkinnaviaImage} alt="サイト" style={{ width: '100%' }} />
      <h2>概要</h2>
      <p>肌状態や予算などの情報を入力すると健康商品を勧めるアプリ</p>
      
      <h3>苦労した点</h3>
      <p>ビルドファイルの欠損でエディタが使えなくなるトラブルが起きた際、新しくビルドファイルを作成して、キャッシュを削除することで解決しました。
        また、リーダーとしてメンバーに頼んでいた業務の進捗が間に合わなさそうな際に業務を巻き取り、開発して間に合わせたりなど完成を第一に考えて貢献しました。</p>
      <h4>担当</h4>
      <p>4人チームのリーダー兼テストコードエンジニアを務め、設計と進捗管理、単体テスト、結合テスト、Linux上での負荷テスト(100人に1000回アクセスさせて落ちないか)などを担当しました</p>
    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe width="315" height="576" 
        src="https://www.youtube.com/embed/61xIfB3TlWs" 
        title="【チームVertex】GDGoCハッカソン" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>
      {/* ホームに戻るボタン */}
      <Link to="/">← ホームに戻る</Link>
    </div>
  );
}

export default Skinnaviapage;