import {Link} from "react-router-dom"; // リンク機能を使うため
function Projects() {
  return (
    <section>
      <h1>My Projects & Research</h1>
      {/* プロジェクト 1: 研究 */}
      <Link to="/research" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="project-card" >
          <h2>サーバーログの異常検知に関する研究</h2>
          <p>第170回 システムソフトウェアとオペレーティングシステム研究会にて発表</p>
          <p><strong>技術スタック:</strong> Python, Machine Learning, AWS(EC2, S3)</p>
        </div>
      </Link>

      {/* プロジェクト 2:  */}
      <div className="project-card">
        <h3>ONE Tap Clear Sound</h3>
        <p>音楽ファイルをAIでタグ分けして、対応する音質処理をするアプリケーション</p>
        <p><strong>技術スタック:</strong> Python, Pydub, Tensorflow, AzureAI</p>
      </div>

      {/* プロジェクト 3:  */}
      <Link to="/shareex" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="project-card">
        <h4>ShareEX</h4>
        <p>技術レポートを投稿/共有するためのプラットフォームアプリ</p>
        <p><strong>技術スタック:</strong> Java</p>
      </div>
      </Link>

      {/* プロジェクト 4:  */}
      <div className="project-card">
        <h4>Univer Support</h4>
        <p>大学生活を補助するアプリ</p>
        <p><strong>技術スタック:</strong>C++, Crow, AzureAI</p>
      </div>
      
      {/* プロジェクト 5:  */}
      <div className="project-card">
        <h5>Youtube official site</h5>
        <p>自身のYouTube公式サイト</p>
        <p><strong>技術スタック:</strong>Java, Tomcat, AWS(EC2, RDS), MySQL</p>
      </div>
    </section>
  );
}

export default Projects;