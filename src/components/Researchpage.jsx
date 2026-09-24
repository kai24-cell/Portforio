import { Link } from "react-router-dom"; // リンク機能を使うため
import ResearchpageImage from "../assets/ResearchPre.jpg"; // 研究ページの画像をインポート
import ICAITDImage from "../assets/ICAITD.png"; // ICAITD 2026の画像をインポート
import { researchData } from "../data/researchData";

function Researchpage() {
  return (
    <div >
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>{researchData.title}</h1>
        <h2>{researchData.overviewSection}</h2>
        <p>{researchData.overview}</p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0' }}>
          <h3 style={{ textAlign: 'left', lineHeight: '1.6' }}>
            {researchData.confTitle}<br />
            <h4>{researchData.confText}</h4>
            {researchData.paperTitle}
            <h5><a href={researchData.officialPageLink} target="_blank" rel="noopener noreferrer">
    {researchData.officialPageText}</a></h5>
          </h3>
          <img src={ICAITDImage} alt="ICAITD 2026査読通知" style={{ width: '40%' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0' }}>
          <h4 style={{ textAlign: 'left', lineHeight: '1.6' }}>
            {researchData.confTitle_second}<br />
            <h5>{researchData.confText_second}</h5>
            {researchData.paperTitle_second}
            <h6><a href={researchData.officialPageLink_second} target="_blank" rel="noopener noreferrer">
    {researchData.officialPageText_second}</a></h6>
            <h7><a href={researchData.presentationSlideLink} target="_blank" rel="noopener noreferrer">
    発表スライドはこちらから</a></h7>
          </h4>
          <img src={ResearchpageImage} alt="研究発表画像" style={{ width: '40%' }} />
          
        </div>
      </div>
  
      {/* ホームに戻るボタン */}
      <Link to="/">← ホームに戻る</Link>
    </div>
  );
}

export default Researchpage;