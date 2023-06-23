import React from 'react';
const unsplashTag = [
  { name: 'art' },
  { name: 'morden' },
  { name: 'sculpture' },
  { name: 'design' },
  { name: 'illustration' },
  { name: 'tattoo' },
];
const UnsplashTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div class="unsplash__tag">
      <div>
        {unsplashTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnsplashTag;
