import { Link } from "react-router-dom"; // リンク機能を使うため
import { internshipData } from "../data/internshipData";
function LongInternpage() {
  return (
    <article className="internship-detail">
      <h1>{internshipData.title}</h1>
      <div className="internship-description">
        {internshipData.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <h2>{internshipData.title2}</h2>
      <div className="internship-description">
        {internshipData.paragraphs2.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <h3>{internshipData.title3}</h3>
      <div className="internship-description">
        {internshipData.paragraphs3.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <h4>{internshipData.title4}</h4>
      <div className="internship-description">
        {internshipData.paragraphs4.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <h5>{internshipData.title5}</h5>
      <div className="internship-description">
        {internshipData.paragraphs5.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <h6>{internshipData.title6}</h6>
      <div className="internship-description">
        {internshipData.paragraphs6.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div> 
      {/* ホームに戻るボタン */}
      <Link to="/">← ホームに戻る</Link>
    </article>
  );
}

export default LongInternpage;
