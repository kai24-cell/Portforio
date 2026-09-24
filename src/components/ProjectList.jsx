import {Link} from "react-router-dom"; // リンク機能を使うため
function Projects() {
  return (
    <section className="projects-section">
      <div className="project-grid project-grid-featured">
      {/* プロジェクト 1: 研究 */}
      <Link to="/research" className="project-card">
          <h2>研究</h2>
          <p>1. ICAITD 2026</p>
          <p>2. 情報処理学会</p>
      </Link>

      {/*プロジェクト 2: */}
      <Link to="/longintern" className="project-card internship-card">
        <h2>インターンシップ</h2>
        <span>詳細を見る →</span>
      </Link>

      </div>
      <div className="project-grid project-grid-apps">
      {/* プロジェクト 2:  */}
      <Link to="/onetapclersound" className="project-card">
        <h2>ONE Tap Clear Sound</h2>
        <p>音楽ファイルをAIでタグ分けして、対応する音質処理をするアプリケーション</p>
        <p><strong>技術スタック:</strong> Python(Flask), Pydub, Tensorflow, AzureAI</p>
      </Link>

      {/* プロジェクト 3:  */}
      <Link to="/shareex" className="project-card">
        <h2>ShareEX</h2>
        <p>技術レポートを投稿/共有するためのプラットフォームアプリ</p>
        <p><strong>技術スタック:</strong> Java(Spring Boot), PostgreSQL, HTML/CSS, JavaScript</p>
      </Link>
      
      {/* プロジェクト 4:  */}
      <Link to="/youtube" className="project-card">
        <h2>Youtube official site</h2>
        <p>自身のYouTube公式サイト</p>
        <p><strong>技術スタック:</strong>Java(Tomcat), AWS(EC2, RDS), MySQL, AWS(EC2, RDS), HTML/CSS, JavaScript</p>
      </Link>
      {/*プロジェクト 5:  */}
      <Link to="/skinnavia" className="project-card">
        <h2>スキンナビア</h2>
        <p>健康商品のレコメンドアプリ</p>
        <p><strong>技術スタック</strong>Java(Spring Boot), Python(FastAPI), HTML/CSS, JavaScript</p>
      </Link>
      </div>
    </section>
  );
}

export default Projects;
