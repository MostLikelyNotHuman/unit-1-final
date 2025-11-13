import { Route, Routes } from 'react-router';
import './App.css'
import HelpPage from './components/HelpPage';
import HomePage from './components/HomePage';
import IntervalPractice from './components/IntervalPractice';
import NotePractice from './components/NotePractice';
import RhythmPractice from './components/RhythmPractice';
import Header from './components/pieces/Header';
import Footer from './components/pieces/Footer';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practice-notes" element={<NotePractice />} />
        <Route path="/practice-intervals" element={<IntervalPractice />} />
        <Route path="/practice-rhythm" element={<RhythmPractice />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
