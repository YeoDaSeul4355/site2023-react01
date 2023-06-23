import React, { useState } from 'react';
const cardTag = {
  menu1: '1800년대',
  menu2: '1900년대',
  menu3: '2000년대 ',
};

const cardText = [
  {
    cardImg: './assets/images/card/card01.jpg',
    iconImg: './assets/images/card/card_icon01.png',
    title: '백일몽',
    desc: '알폰스 무하',
  },
  {
    cardImg: './assets/images/card/card02.jpg',
    iconImg: './assets/images/card/card_icon02.png',
    title: '구성II - 빨강, 파랑 그리고 노랑',
    desc: '피에트 몬드리안',
  },
  {
    cardImg: './assets/images/card/card03.jpg',
    iconImg: './assets/images/card/card_icon03.png',
    title: '별이 빛나는 밤',
    desc: '빈센트 반고흐',
  },
  {
    cardImg: './assets/images/card/card04.jpg',
    iconImg: './assets/images/card/card_icon04.png',
    title: 'KISS',
    desc: '구스타프 클림트',
  },
  {
    cardImg: './assets/images/card/card05.jpg',
    iconImg: './assets/images/card/card_icon05.png',
    title: 'Ophelia',
    desc: '존 에버렛 밀레이',
  },
  {
    cardImg: './assets/images/card/card06.jpg',
    iconImg: './assets/images/card/card_icon06.png',
    title: '꿈(La rve)',
    desc: '파블로 피카소',
  },
];
const cardText02 = [
  {
    cardImg: './assets/images/card/card07.png',
    iconImg: './assets/images/card/card_icon01.png',
    title: '백일몽',
    desc: '알폰스 무하',
  },
  {
    cardImg: './assets/images/card/card08.png',
    iconImg: './assets/images/card/card_icon02.png',
    title: '구성II - 빨강, 파랑 그리고 노랑',
    desc: '피에트 몬드리안',
  },
  {
    cardImg: './assets/images/card/card09.png',
    iconImg: './assets/images/card/card_icon03.png',
    title: '별이 빛나는 밤',
    desc: '빈센트 반고흐',
  },
  {
    cardImg: './assets/images/card/card10.png',
    iconImg: './assets/images/card/card_icon04.png',
    title: 'KISS',
    desc: '구스타프 클림트',
  },
  {
    cardImg: './assets/images/card/card11.png',
    iconImg: './assets/images/card/card_icon05.png',
    title: 'Ophelia',
    desc: '존 에버렛 밀레이',
  },
  {
    cardImg: './assets/images/card/card12.png',
    iconImg: './assets/images/card/card_icon06.png',
    title: '꿈(La rve)',
    desc: '파블로 피카소',
  },
];
const cardText03 = [
  {
    cardImg: './assets/images/card/card13.png',
    iconImg: './assets/images/card/card_icon01.png',
    title: '백일몽',
    desc: '알폰스 무하',
  },
  {
    cardImg: './assets/images/card/card14.png',
    iconImg: './assets/images/card/card_icon02.png',
    title: '구성II - 빨강, 파랑 그리고 노랑',
    desc: '피에트 몬드리안',
  },
  {
    cardImg: './assets/images/card/card15.png',
    iconImg: './assets/images/card/card_icon03.png',
    title: '별이 빛나는 밤',
    desc: '빈센트 반고흐',
  },
  {
    cardImg: './assets/images/card/card16.png',
    iconImg: './assets/images/card/card_icon04.png',
    title: 'KISS',
    desc: '구스타프 클림트',
  },
  {
    cardImg: './assets/images/card/card17.png',
    iconImg: './assets/images/card/card_icon05.png',
    title: 'Ophelia',
    desc: '존 에버렛 밀레이',
  },
  {
    cardImg: './assets/images/card/card18.png',
    iconImg: './assets/images/card/card_icon06.png',
    title: '꿈(La rve)',
    desc: '파블로 피카소',
  },
];
function CardText({ cardImg, iconImg, title, desc }) {
  return (
    <div className="card">
      <figure className="card__header">
        <img src={cardImg} alt={title} />
      </figure>
      <div className="card__body">
        <span>
          <img src={iconImg} alt={desc} />
        </span>
        <div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
const CardCont = () => {
  const [activeButton, setActiveButton] = useState(cardTag.menu1);
  const [cardData, setCardData] = useState(cardText);

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);

    if (buttonName === cardTag.menu2) {
      setCardData(cardText02);
    } else if (buttonName === cardTag.menu3) {
      setCardData(cardText03);
    } else {
      setCardData(cardText);
    }
  };
  return (
    <section id="cardsSection" className="container section">
      <div className="cards__inner container">
        <div className="cards__btn">
          <button
            className={activeButton === cardTag.menu1 ? 'active' : ''}
            onClick={() => handleButtonClick(cardTag.menu1)}
          >
            {cardTag.menu1}
          </button>
          <button
            className={activeButton === cardTag.menu2 ? 'active' : ''}
            onClick={() => handleButtonClick(cardTag.menu2)}
          >
            {cardTag.menu2}
          </button>
          <button
            className={activeButton === cardTag.menu3 ? 'active' : ''}
            onClick={() => handleButtonClick(cardTag.menu3)}
          >
            {cardTag.menu3}
          </button>
        </div>
        <div className="cards__conts">
          {cardData.map((text, index) => (
            <CardText
              key={index}
              cardImg={text.cardImg}
              iconImg={text.iconImg}
              title={text.title}
              desc={text.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardCont;
