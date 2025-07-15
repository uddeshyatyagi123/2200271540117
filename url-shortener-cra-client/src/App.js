import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import UrlShortenerPage from './pages/UrlShortenerPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/shortener" element={<UrlShortenerPage />} />
    </Routes>
  );
}

export default App;
