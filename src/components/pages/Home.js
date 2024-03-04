import React from 'react';
import ContactForm from '../forms/ContactForm';
import HeroSection from '../HeroSection';
import OffSlider from '../sliders/OffSlider';
import { Welcome, AboutUs } from './Data'
// import OfferSlider from '../sliders/OfferSlider';
// import FeedbackSection from '../FeedbackSection';
// import { Divider } from '@material-ui/core';


function Home() {
  return (
    <>
      <HeroSection {...Welcome} />
      {/* <Divider style={{height: '2px', backgroundColor: '#82171f'}} /> */}
      {/* <OfferSlider /> */}
      <OffSlider />
      {/* <CardSlider /> */}
      {/* <InfiniteCardSlider /> */}
      {/* <Divider style={{height: '2px', backgroundColor: '#82171f', marginTop: '75px'}} /> */}
      <ContactForm />
      {/* <Divider style={{height: '2px', backgroundColor: '#82171f'}} /> */}
      <HeroSection {...AboutUs} />
      {/* <FeedbackSection /> */}
      {/* <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;
