import React from 'react';
import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';

import CardCont from '../card/CardCont';

const CardPage = () => {
  return (
    <>
      <Contents>
        <ContTitle
          title="art work"
          desc="근•현대 미술에 대한 소개입니다. 다양한 작품들과 미디어를 접해보세요!"
        />
        {/* <CardTag /> */}
        <CardCont />
      </Contents>
    </>
  );
};

export default CardPage;
