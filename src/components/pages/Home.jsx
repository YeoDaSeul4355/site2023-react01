import React from 'react';
import Contents from '../layout/Contents';
import Slider from '../section/Slider';
import Intro from '../section/Intro';
import Image from '../section/Image';
import Card from '../section/Card';
import Youtube from '../section/Youtube';
import Unsplash from '../section/Unsplash';
import Movie from '../section/Movie';

const Home = () => {
  return (
    <>
      <Contents>
        <Slider attr="slider__wrap dream" />
        <Intro attr="intro__wrap section dream" />
        {/* <Image attr="images__wrap section center dream" /> */}
        <Card attr="cards__wrap section center bg-blue dream" />
        <Youtube attr="youtube__wrap section dream" />
        <Unsplash attr="unsplash__wrap section dream bg-blue" />
        <Movie attr="movies__wrap section dream" />
      </Contents>
    </>
  );
};

export default Home;
