import { Routes, Route } from 'react-router-dom';
import UrlShortenerPage from './pages/UrlShortenerPage';
import RedirectHandler from './pages/RedirectHandler';
// import StatisticsPage from './pages/StatisticsPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<UrlShortenerPage />} />
      <Route path="/:shortcode" element={<RedirectHandler />} />
      {/* <Route path="/stats" element={<StatisticsPage />} /> */}

    </Routes>
  );
}

export default App;
