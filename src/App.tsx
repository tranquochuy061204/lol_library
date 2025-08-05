import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChampionDetail from './pages/ChampionDetail';
import './index.css'; // Ensure global styles are applied
import StickyBar from './components/StickyBar';

const App = () => {
  return (
    <main>
      <StickyBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:championId" element={<ChampionDetail />} />
      </Routes>
    </main>
  );
};

export default App;
