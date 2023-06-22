import React, { useRef } from 'react';

const UnsplashSearch = ({ onSearch }) => {
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
    <div className="unsplash__search container">
      <h2 className="blind">검색하기</h2>
      <input
        type="search"
        ref={inputRef}
        onKeyPress={onKeyPress}
        placeholder="이미지를 검색하세요!"
      />
      <button type="submit" onClick={onClick} className="button-red">
        검색하기
      </button>
    </div>
  );
};

export default UnsplashSearch;
