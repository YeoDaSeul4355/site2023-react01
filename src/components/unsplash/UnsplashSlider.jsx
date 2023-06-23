import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

import { Autoplay, EffectCards, Pagination } from 'swiper';
const UnsplashBox = ({ image, index }) => {
  return (
    <a href={image.links.html} target="_blank" rel="noreferrer">
      <img src={image.urls.regular} alt={image.alt_description} />
    </a>
  );
};
const UnsplashSlider = ({ random }) => {
  return (
    <div className="unsplash__slider">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        centeredSlides={true}
        // shadows={false}
        EffectCards={{
          slideShadows: false,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCards, Pagination, Autoplay]}
        className="mySwiper"
      >
        {random.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <UnsplashBox key={index} image={image} index={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default UnsplashSlider;
