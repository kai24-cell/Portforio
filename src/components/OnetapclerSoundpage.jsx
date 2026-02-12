import { Link } from "react-router-dom"; // リンク機能を使うため
import OneTapClearSound from "../assets/Onetapsample1.jpg";
function OnetapclerSoundpage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>One Tap Clear Sound 詳細</h1>
      <img src={OneTapClearSound} alt="会場"  />
      
      <h2>概要</h2>
      <p>音楽ファイルをAIでタグ分けして、対応する音質処理をするアプリケーションです。</p>
      <div>サイバーエージェント主催Re; Build in 愛知で発表(画像)<br />
      Microsoft主催ImagineCapへ投稿しました。(デモ動画)</div>
      <h3>苦労したところ</h3>
      <div>本アプリは初心者SNS投稿者を対象としており、ワンタップで高音質にするというコンセプトで制作しました。
        その際、なるべくシンプルなUI/UXをフロントエンド担当と相談しながら設計する連携力、
        初めて触る技術であるTensorflowの機械学習モデル構築とPydubの音声処理の情報を調べながら実装する点で苦労しました。
      </div>
      <h4>デモ動画</h4>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/YBpncVFS4x0?si=v4HzVghc6Hv8PAM4" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>

        </iframe>
      </div>
      

      {/* ホームに戻るボタン */}
      <Link to="/">← ホームに戻る</Link>
    </div>
  );
}

export default OnetapclerSoundpage;