import React from 'react';
import Slider from 'react-slick';

import SlideElement from './slideElement'

const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const generateSlides = ({slides}) => {
    if(slides){
         return (
            <Slider {...settings}>
            <div>
                {slides.map((item)=><div key={item.id}><SlideElement item={item} /></div>
                )}
                </div> 
            </Slider>
        )
    }
}

const Featured = (props) => {
    return(
        <div>
            {generateSlides(props)}
        </div>
    )
}

export default Featured;