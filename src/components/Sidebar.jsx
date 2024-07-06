```jsx
import React from 'react';
import './Sidebar.css'; // Assuming you have some basic styles for the sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h2>Trending Topics</h2>
        <ul>
          <li>#ReactJS</li>
          <li>#JavaScript</li>
          <li>#WebDevelopment</li>
          <li>#CSS</li>
          <li>#HTML</li>
        </ul>
      </div>
      
      <div className="sidebar-section">
        <h2>Newsletter Signup</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      
      <div className="sidebar-section">
        <h2>Advertisement</h2>
        <div className="ad-placeholder">Ad Space</div>
      </div>
    </div>
  );
};

export default Sidebar;
```

Note: Ensure you have a corresponding CSS file (`Sidebar.css`) to style the sidebar appropriately.