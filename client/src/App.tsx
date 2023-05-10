import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import FlashCardPage from './pages/flash-card-page/FlashCardPage';
import Login from './pages/login/components/Login';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/flashcards' element={<FlashCardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
