import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Frame } from './components/Frame';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="frame/:id" element={<Frame/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
