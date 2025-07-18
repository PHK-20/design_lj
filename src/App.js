import './App.css';
import HomePage from './HomePage.tsx';
import AboutPage from './AboutPage.tsx';
import ExperiencePage from './ExperiencePage.tsx';
import PortfolioPage from './PortfolioPage.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
