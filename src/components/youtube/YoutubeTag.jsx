import React from 'react';

const youtubeTag = [
  { name: '현대 미술' },
  { name: '서양화' },
  { name: '동양화' },
  { name: '소묘' },
  { name: '수채화' },
  { name: '일러스트' },
];

const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div class="youtube__tag">
      <div>
        {youtubeTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YoutubeTag;
