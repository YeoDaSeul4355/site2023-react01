import React from 'react';
import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';

import YoutubeSlider from '../youtube/YoutubeSlider';
import YoutubeSearch from '../youtube/YoutubeSearch';
import YoutubeTag from '../youtube/YoutubeTag';
import YoutubeCont from '../youtube/YoutubeCont';

const YoutubePage = () => {
  return (
    <>
      <Contents>
        <ContTitle title="youtube" />
        <YoutubeSlider />
        <YoutubeSearch />
        <YoutubeTag />
        <YoutubeCont />
      </Contents>
    </>
  );
};

export default YoutubePage;
