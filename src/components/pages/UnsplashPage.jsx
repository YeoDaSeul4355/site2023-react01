import React, { useEffect, useState } from 'react';
import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';

import UnsplashSlider from '../unsplash/UnsplashSlider';
import UnsplashSearch from '../unsplash/UnsplashSearch';
import UnsplashTag from '../unsplash/UnsplashTag';
import UnsplashCont from '../unsplash/UnsplashCont';

const UnsplashPage = () => {
  const [images, setImages] = useState([]);
  const [randomImages, setRandomImages] = useState([]);

  // 서치
  const search = async query => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=HWsGXX5NmVoWI3FflAtezFOkvUNF4Wr7dJ-UFcw2UNc&query=${query}&per_page=30`,
    )
      .then(response => response.json())
      .then(result => setImages(result.results))
      .catch(error => console.log(error));
  };

  // 이미지 불러오기
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://api.unsplash.com/photos?client_id=HWsGXX5NmVoWI3FflAtezFOkvUNF4Wr7dJ-UFcw2UNc&per_page=30',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => setImages(result))
      .catch(error => console.log('error', error));

    fetch(
      'https://api.unsplash.com/photos/random?client_id=HWsGXX5NmVoWI3FflAtezFOkvUNF4Wr7dJ-UFcw2UNc&count=10',
    )
      .then(response => response.json())
      .then(result => setRandomImages(result))
      .catch(error => console.log('error', error));
  }, []);
  return (
    <>
      <Contents>
        <ContTitle title="unsplash" />
        <UnsplashSlider random={randomImages} />
        <UnsplashSearch onSearch={search} />
        <UnsplashTag onSearch={search} />
        <UnsplashCont images={images} />
      </Contents>
    </>
  );
};

export default UnsplashPage;
