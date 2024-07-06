import React from 'react';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-4">
        <h1 className="text-4xl font-bold">Financial News Today</h1>
        <p className="text-lg text-gray-600">Stay updated with the latest financial news</p>
      </header>
      <main>
        <section className="my-8">
          <h2 className="text-2xl font-semibold">Top Stories</h2>
          {/* Placeholder for top stories */}
          <div className="mt-4">
            <p>Loading top stories...</p>
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold">Market Updates</h2>
          {/* Placeholder for market updates */}
          <div className="mt-4">
            <p>Loading market updates...</p>
          </div>
        </section>
      </main>
      <footer className="text-center my-4">
        <p className="text-sm text-gray-500">&copy; 2023 Financial News Today. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
