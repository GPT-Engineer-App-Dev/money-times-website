import React from 'react';
import PropTypes from 'prop-types';
import './NewsGrid.css'; // Assuming you have some basic styles for the grid

const NewsGrid = ({ stories }) => {
  return (
    <div className="news-grid">
      {stories.map((story, index) => (
        <div key={index} className="news-item">
          <h2>{story.title}</h2>
          <p>{story.description}</p>
          <a href={story.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

NewsGrid.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewsGrid;
```

```css
/* src/components/NewsGrid.css */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
}

.news-item {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
}

.news-item h2 {
  font-size: 1.25em;
  margin-bottom: 8px;
}

.news-item p {
  font-size: 1em;
  margin-bottom: 8px;
}

.news-item a {
  color: #007bff;
  text-decoration: none;
}

.news-item a:hover {
  text-decoration: underline;
}