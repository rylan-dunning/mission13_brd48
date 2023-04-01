import React from 'react';
import './App.css';
import Podcast from './Pages/Podcast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import MovieList from './Pages/Movies';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Podcast" element={<Podcast />} />
            <Route path="Movies" element={<MovieList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
