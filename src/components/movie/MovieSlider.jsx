import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from 'swiper';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);
const MovieImg = ({ movie }) => {
  return (
    <Link to={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank">
      <img
        src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
        alt={movie.title}
      />
    </Link>
  );
};
const MovieSlider = ({ movies }) => {
  return (
    <div className="movie__slider">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'5'}
        initialSlide="3"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {movies.map((movie, index) => (
          <SwiperSlide>
            <MovieImg key={index} movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default MovieSlider;
