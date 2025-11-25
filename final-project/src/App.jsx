import { Route, Routes } from 'react-router';
import './App.css'
import HelpPage from './components/HelpPage';
import HomePage from './components/HomePage';
import IntervalPractice from './components/IntervalPractice';
import NotePractice from './components/NotePractice';
import ReviewPage from './components/ReviewPage';
import Header from './components/pieces/Header';
import Footer from './components/pieces/Footer';
import ContactPage from './components/ContactPage';
import { useState } from 'react';

function App() {

  const [ reviewNotes, setReviewNotes ] = useState([]);
  const [ reviewIntervals, setReviewIntervals ] = useState([]);
  console.log(reviewIntervals);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practice-notes" element={<NotePractice 
                                                  notesReview={reviewNotes}
                                                  setNotesReview={setReviewNotes}/>} />
        <Route path="/practice-intervals" element={<IntervalPractice 
                                                  intervalsReview={reviewIntervals}
                                                  setIntervalsReview={setReviewIntervals}/>} />
        <Route path="/review" element={<ReviewPage
                                          reviewNotes={reviewNotes}
                                          setReviewNotes={setReviewNotes}
                                          Intervals={reviewIntervals}
                                          setReviewIntervals={setReviewIntervals} />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
