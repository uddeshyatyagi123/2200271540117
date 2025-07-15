import React, { useState } from 'react';
import {
  Container, Typography, TextField, Paper, Stack, Button
} from '@mui/material';
import { generateShortcode, validateUrl } from '../utils/validators';

const UrlShortenerPage = () => {
  const [inputs, setInputs] = useState([{ longUrl: '', validity: '', shortcode: '' }]);
  const [results, setResults] = useState([]);

  const handleChange = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  const addUrlInput = () => {
    if (inputs.length < 5) {
      setInputs([...inputs, { longUrl: '', validity: '', shortcode: '' }]);
    }
  };

  const handleSubmit = () => {
    const stored = JSON.parse(localStorage.getItem("urlData")) || {};
    const newResults = inputs.map(input => {
      if (!validateUrl(input.longUrl)) return null;

      const shortcode = input.shortcode?.trim() || generateShortcode();
      if (stored[shortcode]) return null;

      const createdAt = Date.now();
      const validityMinutes = parseInt(input.validity) || 30;
      const expiresAt = createdAt + validityMinutes * 60000;

      const entry = {
        longUrl: input.longUrl.startsWith('http') ? input.longUrl : `https://${input.longUrl}`,
        createdAt,
        expiresAt,
        shortcode,
        clicks: []
      };

      stored[shortcode] = entry;
      return entry;
    }).filter(Boolean);

    localStorage.setItem("urlData", JSON.stringify(stored));
    setResults(newResults);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>URL Shortener</Typography>
      <Button variant="outlined" onClick={addUrlInput} sx={{ mb: 2 }}>Add URL</Button>
      <Stack spacing={2}>
        {inputs.map((input, i) => (
          <Paper key={i} sx={{ p: 2 }}>
            <TextField fullWidth margin="dense" label="Long URL" value={input.longUrl}
              onChange={e => handleChange(i, 'longUrl', e.target.value)} />
            <TextField fullWidth margin="dense" label="Validity (minutes)" type="number" value={input.validity}
              onChange={e => handleChange(i, 'validity', e.target.value)} />
            <TextField fullWidth margin="dense" label="Shortcode (optional)" value={input.shortcode}
              onChange={e => handleChange(i, 'shortcode', e.target.value)} />
          </Paper>
        ))}
      </Stack>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>Generate</Button>

      {results.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <Typography variant="h6">Shortened URLs:</Typography>
          {results.map((r, i) => (
            <Paper key={i} sx={{ p: 2, mt: 1 }}>
              <Typography>
                Short URL:{" "}
                <a href={`/${r.shortcode}`} target="_blank" rel="noopener noreferrer">
                  {window.location.origin}/{r.shortcode}
                </a>
              </Typography>
              <Typography>Expires At: {new Date(r.expiresAt).toLocaleString()}</Typography>
            </Paper>
          ))}
        </div>
      )}
    </Container>
  );
};

export default UrlShortenerPage;
