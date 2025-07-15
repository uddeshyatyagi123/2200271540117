import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const RedirectHandler = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("urlData")) || {};
    const entry = stored[shortcode];

    if (entry && Date.now() < entry.expiresAt) {
      entry.clicks.push({
        timestamp: new Date().toISOString(),
        source: document.referrer || "direct",
        geoLocation: "Unknown",
      });
      stored[shortcode] = entry;
      localStorage.setItem("urlData", JSON.stringify(stored));
      window.location.href = entry.longUrl;
    } else {
      alert("This link is invalid or expired.");
    }
  }, [shortcode]);

  return <p className="text-center mt-10">Redirecting...</p>;
};

export default RedirectHandler;
