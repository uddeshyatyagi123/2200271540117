import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RedirectHandler = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("urlData") || "{}");
    const entry = data[shortcode];

    if (entry && Date.now() < entry.expiresAt) {
      // Update click log
      entry.clicks = entry.clicks || [];
      entry.clicks.push({
        timestamp: Date.now(),
        referrer: document.referrer
      });

      data[shortcode] = entry;
      localStorage.setItem("urlData", JSON.stringify(data));

      window.location.href = entry.longUrl;
    } else {
      alert("Link not found or expired.");
      navigate("/");
    }
  }, [shortcode, navigate]);

  return null;
};

export default RedirectHandler;
