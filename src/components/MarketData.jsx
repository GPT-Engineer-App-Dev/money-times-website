import React, { useEffect, useState } from 'react';

const MarketData = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch('https://api.example.com/market-data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMarketData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Market Data</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Current Value</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {marketData.map((index) => (
            <tr key={index.name}>
              <td>{index.name}</td>
              <td>{index.currentValue}</td>
              <td>{index.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketData;