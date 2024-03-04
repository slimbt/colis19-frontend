import React from 'react'
import CardFeedback from './cards/CardFeedback'
import HeroSlider from './HeroSlider'
import FeedbackSwiper from './sliders/FeedbackSwiper'

function FeedbackSection() {
    return (
        <div className='main-section'>
            <HeroSlider />
            {/* <FeedbackSwiper /> */}
            {/* <CardFeedback />
            <CardFeedback /> */}
        </div>
    )
}

export default FeedbackSection
