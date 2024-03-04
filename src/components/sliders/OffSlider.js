import React from "react";
import Slider from "react-slick";
import SliderWrapper from "./_SlickSliderStyle";
import CardItem from '../cards/CardItem';

function OffSlider() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: true,
    adaptiveHeight: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };

  return (
      <SliderWrapper>
        <Slider {...settings}>
            <CardItem
                    src='images/fl9.jpg'
                    text='plusieurs couleurs de bouquets sont disponibles'
                    // label='Offres'
                    path='/'
                />
            <CardItem
                    src='images/fl7.jpg'
                    text='plusieurs modèles de coffrets'
                    // label='Offres'
                    path='/'
                />
            <CardItem
                    src='images/fl5.jpg'
                    text='Décoration des voitures de mariages'
                    // label='Offres'
                    path='/'
                />
          <CardItem
                    src='images/fl8.jpg'
                    text='Décoration des thèses,mémoires..'
                    // label='Recrutement'
                    path='/'
                />
          <CardItem
                    src='images/fl6.jpg'
                    text='On a beaucoup de choix pour les plantes'
                    // label='Discover'
                    path='/'
                />
        </Slider>
      </SliderWrapper>
  );
}

export default OffSlider
