import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

// Import Swiper modules
import { Navigation } from "swiper/modules";

const Controls = ({ data, swiperInstance }) => {
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(0, 1);
    }
  }, [data, swiperInstance]);

  return null;
};

const Carousel = ({ data, renderCardComponent }) => {
  let swiperRef;

  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        spaceBetween={40}
        slidesPerView={"auto"}
        modules={[Navigation]}
        allowTouchMove
        onSwiper={(swiper) => (swiperRef = swiper)}
      >
        <Controls data={data} swiperInstance={swiperRef} />
        <CarouselLeft />
        <CarouselRight />
        {data.map((item, index) => (
          <SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
