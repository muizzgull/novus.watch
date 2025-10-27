import { Routes, Route } from 'react-router-dom';
import './App.css'
import '../public/home/images/home-background.jpg';
import { HomePage } from './HomePage';
import { PolicyPage } from './PolicyPage';
import { ContactPage } from './ContactPage';
import { ExplorePage } from './ExplorePage';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </div>
  )
}

export default App
