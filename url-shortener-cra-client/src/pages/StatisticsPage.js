import { useEffect, useState } from 'react';

const StatisticsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("urlData")) || {};
    setData(Object.values(stored));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shortened URL Statistics</h1>
      {data.map((url, i) => (
        <div key={i} className="bg-white shadow p-4 rounded mb-4">
          <p>Short URL: {window.location.origin}/{url.shortcode}</p>
          <p>Created At: {new Date(url.createdAt).toLocaleString()}</p>
          <p>Expires At: {new Date(url.expiresAt).toLocaleString()}</p>
          <p>Clicks: {url.clicks.length}</p>
          <div className="mt-2">
            <p className="font-semibold">Click Details:</p>
            {url.clicks.map((click, idx) => (
              <p key={idx} className="text-sm">
                {click.timestamp} - {click.source} - {click.geoLocation}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsPage;
