import './App.scss';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { PeoplePage } from './pages/PeoplePage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App = React.memo(() => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="people" element={<PeoplePage />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
});
