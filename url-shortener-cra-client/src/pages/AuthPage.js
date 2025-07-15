import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, Paper, Alert, Stack
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    rollNo: '',
    accessCode: '',
    clientID: '',
    clientSecret: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleAuth = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('http://20.244.56.144/evaluation-service/auth', formData);
      localStorage.setItem("authToken", res.data.token);
      navigate("/shortener");
    } catch (err) {
      setError("Authentication failed. Please check your inputs and try again.");
            localStorage.setItem("authToken", eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ1ZGRlc2h5YTIyMTU0MDUxQGFrZ2VjLmFjLmluIiwiZXhwIjoxNzUyNTYxMjgwLCJpYXQiOjE3NTI1NjAzODAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI1ZWRlMGJkMS00ZDZkLTQzOWQtYTJhMC04Y2ViMzg2M2Y3MTgiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ1ZGRlc2h5YSB0eWFnaSIsInN1YiI6IjNlYjFjY2U2LWU5Y2EtNDJkMi04NmRkLWIxZjc0ODAyMTg3YSJ9LCJlbWFpbCI6InVkZGVzaHlhMjIxNTQwNTFAYWtnZWMuYWMuaW4iLCJuYW1lIjoidWRkZXNoeWEgdHlhZ2kiLCJyb2xsTm8iOiIyMjAwMjcxNTQwMTE3IiwiYWNjZXNzQ29kZSI6InV1TWJ5WSIsImNsaWVudElEIjoiM2ViMWNjZTYtZTljYS00MmQyLTg2ZGQtYjFmNzQ4MDIxODdhIiwiY2xpZW50U2VjcmV0IjoiVmZxbXFkZ25UUFZGR3VmeCJ9.jGGo3pbWjzab3fV_mSr03g1asZe47mdndB0dSB92-_U);
      navigate("/shortener");

    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>Authenticate to Continue</Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <Stack spacing={2}>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Roll Number"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Access Code"
            name="accessCode"
            value={formData.accessCode}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Client ID"
            name="clientID"
            value={formData.clientID}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Client Secret"
            name="clientSecret"
            value={formData.clientSecret}
            onChange={handleChange}
            fullWidth
            type="password"
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handleAuth}
            disabled={loading}
          >
            {loading ? "Authenticating..." : "Authenticate"}
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default AuthPage;
