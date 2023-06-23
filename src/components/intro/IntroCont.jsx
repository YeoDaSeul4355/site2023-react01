import React from 'react';

const IntroCont = () => {
  return (
    <div class="intro__page">
      <h3 class="blind">근•현대 미술의 특징</h3>

      <div class="intro__box section container">
        <div class="intro__box01">
          <img src="/assets/images/card/card01.jpg" alt="" class="introImg01" />
          <p>
            근•현대 미술은 19세기 중반부터 20세기 초반까지의 미술을 가리키는
            용어입니다. 이 시기는 산업화와 혁신적인 변화의 시기였으며, 이러한
            변화는 미술에도 큰 영향을 미쳤습니다. 이 기간 동안 다양한 예술적
            운동과 스타일이 등장했으며, 이는 전통적인 예술의 경계를 허물고새로운
            시각과 표현 방식을 모색하는 시도로 이해할 수 있습니다.
          </p>
        </div>
        <div class="intro__box02">
          <img src="/assets/images/card/card04.jpg" alt="" class="introImg01" />
          <p>
            근대 미술은 뛰어난 개인 예술가들의 작품과 함께 예술 운동들이 중요한
            역할을 담당했습니다.이 중에서도 가장 잘 알려진 운동으로는 인상주의,
            후기 인상주의,식민주의적 예술(Cubism), 초현실주의(Surrealism),
            추상화(Abstract Expressionism) 등이 있습니다.
          </p>
        </div>
        <div class="intro__box03">
          <img src="/assets/images/card/card03.jpg" alt="" class="introImg01" />
          <p>
            {' '}
            근•현대 미술의 발전은 예술의 경계를 넓히고 새로운 표현 방식을
            모색하는 데 큰 영향을 미쳤으며, 이후의 현대 미술 발전에도 영향을
            주었습니다. 미술사의 관점에 따라 다양한 운동과 작가들이
            등장하였으며, 그들의 작품은 현대 예술의 다양성과 창의성을
            보여줍니다.
          </p>
        </div>
      </div>

      <div class="intro__inner container mb100">
        <div class="intro__title">
          <span>FRONTEND</span>
          <h3>
            근•현대 <br />
            미술의 특징
          </h3>
          <p>
            현대미술의 특징 중 대표적인 네 가지
            <br />
            특징을 소개해 드리겠습니다.
          </p>
        </div>
        <div class="intro__desc">
          <div>
            <h4 class="icon-bg1">다양한 매체와 형식의 활용</h4>
            <p>
              현대미술은 회화와 조각뿐만 아니라 사진, 설치미술, 퍼포먼스 아트,
              디지털 아트 등 다양한 매체와 형식을 포용합니다.
            </p>
          </div>
          <div>
            <h4 class="icon-bg2">주관적이고 개인적인 표현</h4>
            <p>
              현대미술은 개인의 경험, 감정, 생각 등을 중시하며 주관적인 표현을
              강조합니다. 예술가들은 자신의 내면 세계를 표현하고, 사회 문제에
              대한 비판적인 시각을 제시합니다.
            </p>
          </div>
          <div>
            <h4 class="icon-bg3">사회 및 정치적 콘텍스트의 탐구</h4>
            <p>
              현대미술은 사회와 정치, 문화적인 콘텍스트에 대한 탐구와 비판을
              통해 사회적인 메시지를 전달하는 경향이 있습니다.
            </p>
          </div>
          <div>
            <h4 class="icon-bg4">개념과 아이디어의 중요성</h4>
            <p>
              현대미술은 작품의 개념과 아이디어의 중요성을 강조합니다. 시각적인
              면모보다는 작품에 담긴 의미와 아이디어에 초점을 맞추며, 작품이
              갖는 사회적, 문화적, 철학적인 의미를 탐구합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCont;
