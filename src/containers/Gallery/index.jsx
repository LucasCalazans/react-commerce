import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { ImgBlock } from '../../components';

const Gallery = () => {
    const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
    const [currentSlide, setCurrentSlide] = useState(0);

    const onMouseMoveHandler = ev => {
        const { left, top, width, height } = ev.target.getBoundingClientRect();
        const x = ((ev.pageX - left) / width) * 100;
        const y = ((ev.pageY - top) / height) * 100;

        setBackgroundPosition(`${x}% ${y}%`);
    };

    return (
        <Carousel
            showIndicators={false}
            width={340}
            dynamicHeight={true}
            onChange={setCurrentSlide}
            selectedItem={currentSlide}
            showStatus={false}
        >
            <ImgBlock
                onMouseMove={onMouseMoveHandler}
                style={{
                    backgroundImage: `url(${'http://lorempixel.com/output/cats-q-c-640-480-1.jpg'})`,
                    backgroundPosition: backgroundPosition,
                }}
            >
                <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
            </ImgBlock>
            <ImgBlock
                onMouseMove={onMouseMoveHandler}
                style={{
                    backgroundImage: `url(${'http://lorempixel.com/output/cats-q-c-640-480-2.jpg'})`,
                    backgroundPosition: backgroundPosition,
                }}
            >
                <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
            </ImgBlock>
            <ImgBlock
                onMouseMove={onMouseMoveHandler}
                style={{
                    backgroundImage: `url(${'http://lorempixel.com/output/cats-q-c-640-480-3.jpg'})`,
                    backgroundPosition: backgroundPosition,
                }}
            >
                <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
            </ImgBlock>
        </Carousel>
    );
};

export default Gallery;
