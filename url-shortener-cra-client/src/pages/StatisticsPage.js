import React, { useEffect, useState } from 'react';
import {
  Container, Typography, Paper, Divider
} from '@mui/material';

const StatisticsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("urlData")) || {};
    setData(Object.values(stored));
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Shortened URL Statistics</Typography>
      {data.length === 0 && <Typography>No shortened URLs found.</Typography>}

      {data.map((url, i) => (
        <Paper key={i} sx={{ p: 2, mb: 3 }}>
          <Typography><strong>Short URL:</strong> {window.location.origin}/{url.shortcode}</Typography>
          <Typography><strong>Created At:</strong> {new Date(url.createdAt).toLocaleString()}</Typography>
          <Typography><strong>Expires At:</strong> {new Date(url.expiresAt).toLocaleString()}</Typography>
          <Typography><strong>Total Clicks:</strong> {url.clicks.length}</Typography>

          {url.clicks.length > 0 && (
            <>
              <Typography sx={{ mt: 1 }}><strong>Click Details:</strong></Typography>
              <Divider sx={{ my: 1 }} />
              {url.clicks.map((click, idx) => (
                <Typography key={idx} variant="body2">
                  {new Date(click.timestamp).toLocaleString()}
                </Typography>
              ))}
            </>
          )}
        </Paper>
      ))}
    </Container>
  );
};

export default StatisticsPage;
