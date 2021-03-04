import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <section className='carousel'>
    <ScrollContainer>
      <div className='carousel__container'>
        {children}
      </div>
    </ScrollContainer>
  </section>
);
export default Carousel;
