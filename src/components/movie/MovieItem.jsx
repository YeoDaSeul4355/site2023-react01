import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <li>
      <a
        href={`https://www.themoviedb.org/movie/${movie.id}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.alt_description}
        />
      </a>
      <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
        <em>
          <span className="title">{movie.title}</span>
          <span className="star">{movie.vote_average}</span>
        </em>
      </a>
    </li>
  );
};

export default MovieItem;
