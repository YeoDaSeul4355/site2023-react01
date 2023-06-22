import React, { useEffect, useState } from 'react';
import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';

import MovieSlider from '../movie/MovieSlider';
import MovieSearch from '../movie/MovieSearch';
import MovieTag from '../movie/MovieTag';
import MovieCont from '../movie/MovieCont';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  // 서치
  const search = async query => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=86951144e4cb4c72a22189f65fc8c04b&limit=30&query=${query}`,
    )
      .then(response => response.json())
      .then(result => setMovies(result.results))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Njk1MTE0NGU0Y2I0YzcyYTIyMTg5ZjY1ZmM4YzA0YiIsInN1YiI6IjY0OGE2YzJiMDc2Y2U4MDBhZDcxYTNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CZ8mZ22uWV8YY12tC-3CY3sU1tvdCO1bvLqFt4xrm-s',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=86951144e4cb4c72a22189f65fc8c04b&limit=30',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => setMovies(result.results)) // 첫 번째로 확인해야할 것(console로 result값 불러오는지)
      .catch(err => console.error(err));
  }, []);
  return (
    <>
      <Contents>
        <ContTitle title="movie" />
        <MovieSlider movies={movies} />
        <MovieSearch onSearch={search} />
        <MovieTag />
        <MovieCont movies={movies} />
      </Contents>
    </>
  );
};

export default MoviePage;
