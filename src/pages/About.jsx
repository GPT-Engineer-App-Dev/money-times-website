import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Financial Times</h1>
      <p className="mb-4">
        Financial Times is a leading global news organization recognized for its authority, integrity and accuracy. It is part of Nikkei Inc., which provides a broad range of information, news and services for the global business community.
      </p>
      <p className="mb-4">
        We deliver a broad range of information, news and services for the global business community. We have an uncompromising commitment to accuracy and integrity in our journalism.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
      <p className="mb-4">
        To deliver quality business news, analysis and tools to a growing audience of internationally minded professionals.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Values</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Integrity and Independence</li>
        <li>Global Perspective</li>
        <li>Innovation</li>
        <li>Accuracy and Depth</li>
      </ul>
    </div>
  );
};

export default About;