import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import IntroPage from './components/pages/IntroPage';
// import ImagePage from "./components/pages/ImagePage";
import CardPage from './components/pages/CardPage';
import YoutubePage from './components/pages/YoutubePage';
import UnsplashPage from './components/pages/UnsplashPage';
import MoviePage from './components/pages/MoviePage';

const App = () => {
  return (
    <BrowserRouter>
      <Header attr={'header__wrap dream5 bg-blue'} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/intro" element={<IntroPage />}></Route>
        {/* <Route path="/image" element={<ImagePage />}></Route> */}
        <Route path="/card" element={<CardPage />}></Route>
        <Route path="/youtube" element={<YoutubePage />}></Route>
        <Route path="/unsplash" element={<UnsplashPage />}></Route>
        <Route path="/movie" element={<MoviePage />}></Route>
      </Routes>
      <Footer attr={'footer__wrap section bg-blue dream5'} />
    </BrowserRouter>
  );
};

export default App;
