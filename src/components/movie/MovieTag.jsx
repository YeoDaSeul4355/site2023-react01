import React, { useState } from 'react';
const movieTag = [
  { name: '인기 영화', url: 'https://api.themoviedb.org/3/tv/popular' },
  { name: '최근 영화', url: 'https://api.themoviedb.org/3/trending/all/week' },
  { name: '영화 순위', url: 'https://api.themoviedb.org/3/tv/top_rated' },
  { name: 'TV SHOW', url: 'https://api.themoviedb.org/3/tv/on_the_air' },
  { name: '오늘 방송', url: 'https://api.themoviedb.org/3/tv/on_the_air' },
];

const MovieTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = useState('인기 영화');
  function btnClick(e) {
    const clickedTag = movieTag.find(tag => tag.name === e.target.innerText);
    console.log(clickedTag.url);
    if (clickedTag) {
      setActiveTag(clickedTag.name);
      onSearch(clickedTag.url);
    }
  }
  return (
    <div class="movie__tag">
      <div>
        {movieTag.map((tag, index) => (
          <button
            onClick={btnClick}
            key={index}
            className={tag.name === activeTag ? 'active' : ''}
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieTag;
