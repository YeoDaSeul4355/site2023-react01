import React from 'react';
import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';

// import IntroTag from '../intro/IntroTag';
import IntroCont from '../intro/IntroCont';
const IntroPage = () => {
  return (
    <Contents>
      <ContTitle
        title="Intro"
        desc="근•현대 미술에 대한 소개입니다. 다양한 작품들과 미디어를 접해보세요!"
      />
      {/* <IntroTag /> */}
      <IntroCont />
    </Contents>
  );
};

export default IntroPage;
