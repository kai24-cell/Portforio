import {Link} from "react-router-dom"; // リンク機能を使うため
import { internshipData } from "../data/internshipData";
function Projects() {
  return (
    <section>
      <h1>My Projects & Research</h1>
      {/* プロジェクト 1: 研究 */}
      <Link to="/research" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="project-card" >
          <h2>研究</h2>
          <p>1. ICAITD 2026</p>
          <p>2. 情報処理学会</p>
        </div>
      </Link>

      {/*プロジェクト 2: */}
      <Link to="/longintern" className="project-card internship-card">
        <h2>長期インターンシップ</h2>
        <p>{internshipData.title}</p>
        <span>詳細を見る →</span>
      </Link>

      {/* プロジェクト 2:  */}
      <Link to="/onetapclersound" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="project-card">
        <h3>ONE Tap Clear Sound</h3>
        <p>音楽ファイルをAIでタグ分けして、対応する音質処理をするアプリケーション</p>
        <p><strong>技術スタック:</strong> Python(Flask), Pydub, Tensorflow, AzureAI</p>
      </div>
      </Link>

      {/* プロジェクト 3:  */}
      <Link to="/shareex" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="project-card">
        <h4>ShareEX</h4>
        <p>技術レポートを投稿/共有するためのプラットフォームアプリ</p>
        <p><strong>技術スタック:</strong> Java(Spring Boot), PostgreSQL, HTML/CSS, JavaScript</p>
      </div>
      </Link>
      
      {/* プロジェクト 4:  */}
      <Link to="/youtube" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="project-card">
        <h5>Youtube official site</h5>
        <p>自身のYouTube公式サイト</p>
        <p><strong>技術スタック:</strong>Java(Tomcat), AWS(EC2, RDS), MySQL, AWS(EC2, RDS), HTML/CSS, JavaScript</p>
      </div>
      </Link>
      {/*プロジェクト 5:  */}
      <Link to="/skinnavia" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="skinnavia">
        <h6>スキンナビア</h6>
        <p>健康商品のレコメンドアプリ</p>
        <p><strong>技術スタック</strong>Java(Spring Boot), Python(FastAPI), HTML/CSS, JavaScript</p>
      </div>
      </Link>
    </section>
  );
}

export default Projects;
