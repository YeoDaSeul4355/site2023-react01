import React, { useRef } from 'react';

const MovieSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    if (value) onSearch(value);
    else alert('검색어를 입력해주세요!');
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <div className="movie__search container">
      <h2 className="blind">검색하기</h2>
      <input
        type="search"
        ref={inputRef}
        onKeyPress={onKeyPress}
        placeholder="영화를 검색하세요!"
      />
      <button type="submit" onClick={onClick} className="button-blue">
        검색하기
      </button>
    </div>
  );
};

export default MovieSearch;
