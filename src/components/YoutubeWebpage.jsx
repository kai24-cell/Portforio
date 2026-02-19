import { Link } from "react-router-dom"; // リンク機能を使うため
import Youtubepage from "../assets/Youtubewebsite.png";

function YoutubeWebpage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>YouTube Webサイト 詳細</h1>
      <img src={Youtubepage} alt="サイト" style={{ width: '100%' }} />
      
      <h2>概要</h2>
      <p>自身のYoutube公式サイトです。他の活動者との差別化を図るため、制作しました。お問い合わせ機能も追加していたのですが、RDSを用いたAWSサーバの費用が月4000円と高くと
        実際にアクセスされることが少ないことから、現在は非公開にしています。
      </p>
      
      <h3>苦労した点</h3>
      <p>初めてのwebアプリ開発とクラウド公開でしたので、大学で学んだ知識だけでは足りなく、AIに質問しながら開発することに苦労しました。この経験が現在のクラウド, フロントエンド, バックエンド, DBの基礎に繋がっております。</p>
      <h4>アピールポイント</h4>
      <p>実際に必要なサービスを考え制作した経験とクラウドを運用した経験を活かして、今後の開発に役立てています。</p>
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