import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { ImgBlock, GalleryWrapper } from '../../components';

const Gallery = ({ images }) => {
    const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
    const [currentSlide, setCurrentSlide] = useState(0);

    const onMouseMoveHandler = ev => {
        const { left, top, width, height } = ev.target.getBoundingClientRect();
        const x = ((ev.pageX - left) / width) * 100;
        const y = ((ev.pageY - top) / height) * 100;

        setBackgroundPosition(`${x}% ${y}%`);
    };

    return (
        <GalleryWrapper>
            <Carousel
                showIndicators={true}
                onChange={setCurrentSlide}
                selectedItem={currentSlide}
                showStatus={false}
                emulateTouch={true}
            >
                {images.map(({ url, altText, id }) => {
                    return (
                        <ImgBlock
                            onMouseMove={onMouseMoveHandler}
                            key={id}
                            style={{
                                backgroundImage: `url(${url})`,
                                backgroundPosition: backgroundPosition,
                            }}
                        >
                            <img src={url} alt={altText} />
                        </ImgBlock>
                    );
                })}
            </Carousel>
        </GalleryWrapper>
    );
};

export default Gallery;
