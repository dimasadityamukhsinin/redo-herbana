export const goNext = (ref) => {
  if (ref) {
    ref.current.swiper.slideNext();
  }
};

export const goPrev = (ref) => {
  if (ref) {
    ref.current.swiper.slidePrev();
  }
};
