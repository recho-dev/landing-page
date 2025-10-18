import {news} from "./data.js";
import "../../styles/News.css";

export default function News() {
  return (
    <div className="news-container">
      {news.map((news) => (
        <a href={news.link} target="_blank" rel="noreferrer" key={news.title} className="news-link">
          <div className="news-item">
            <h2 className="news-title">{news.title}</h2>
            <p className="news-meta">
              <span>{news.author}</span> • <span>{news.publishedAt}</span>
            </p>
            <p className="news-summary">{news.summary}</p>
            <img src={`news/${news.image}`} alt={news.title} className="news-image" />
          </div>
        </a>
      ))}
    </div>
  );
}
