import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import CardItem from '../cards/CardItem';
import '../../assets/css/OfferSlider.css'
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', right: '0', cursor: 'pointer', backgroundColor: 'transparent', alignItems: 'center', width: '40px', height: '40px' }}
            onClick={onClick}
        >
            <i className="fas fa-arrow-circle-right" style={{ width: '40px', height: '40px', alignItems: 'center' }}></i>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', left: '0', cursor: 'pointer', backgroundColor: 'transparent', alignItems: 'center', zIndex: '999999', width: '40px', height: '40px' }}
            onClick={onClick}
        >
            <i className="fas fa-arrow-circle-left"></i>
        </div>
    );
}


function OfferSlider(props) {
    let settings = {
        // centerMode: true,
        // centerPadding:'80px',
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }

        ]
    }

    return (
        <div className='slider-style'>
            <div className="section-title">
                <h1>
                    Actualités et Offres
                </h1>
            </div>
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
                    text='  Décoration des voitures de mariages '
                    // label='Offres'
                    path='/'
                />
                <CardItem
                    src='images/fl8.jpg'
                    text='Décoration des thèses,mémoires.. '
                    // label='Recrutement'
                    path='/'
                />
                <CardItem
                    src='images/fl6.jpg'
                    text=' On a beaucoup de choix pour les plantes'
                    // label='Discover'
                    path='/'
                />
            </Slider>
        </div>

    )
}

export default OfferSlider
