```jsx
import React from 'react';
import './Header.css'; // Assuming you have some basic styles for the header

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header__search">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <div className="header__profile">
        <img src="/path/to/profile-icon.png" alt="User Profile" />
      </div>
    </header>
  );
};

export default Header;
```

Note: Make sure to replace `/path/to/logo.png` and `/path/to/profile-icon.png` with the actual paths to your logo and profile icon images. Additionally, you might want to create a `Header.css` file to style the header component as needed.