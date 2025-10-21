import {news} from "./data.js";
import "../../styles/News.css";

export default function News() {
  return (
    <div className="news-container">
      {news
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .map((news) => (
          <div className="news-item" key={news.title}>
            <a href={news.link} target="_blank" rel="noreferrer" className="news-link">
              <h2 className="news-title">{news.title}</h2>
            </a>
            <p className="news-meta">
              <span>{news.author}</span> • <span>{news.publishedAt}</span>
            </p>
            <p className="news-summary">{news.summary}</p>
            <img src={`news/${news.image}`} alt={news.title} className="news-image" />
          </div>
        ))}
    </div>
  );
}
