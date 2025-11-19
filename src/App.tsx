import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CosmicBackground } from './components/CosmicBackground';
import { LandingPage } from './components/LandingPage';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Dashboard } from './components/Dashboard';
import { MiniGamesHub } from './components/MiniGamesHub';
import { JourneyTracker } from './components/JourneyTracker';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <CosmicBackground />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mini-games" element={<MiniGamesHub />} />
          <Route path="/journey" element={<JourneyTracker />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
