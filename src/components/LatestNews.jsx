import React from 'react';

const LatestNews = ({ articles }) => {
  return (
    <div className="latest-news">
      <h2>Latest News</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="news-item">
            <h3>{article.title}</h3>
            <p>{new Date(article.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestNews;