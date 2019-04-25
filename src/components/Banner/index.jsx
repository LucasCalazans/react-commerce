import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const CarouselStyled = styled(Carousel)`
    .control-prev.control-arrow:before {
        background: red;
    }
`;

const Banner = ({ images }) => (
    <CarouselStyled showThumbs={false} showStatus={false}>
        {images.map(({ url, alt }, index) => (
            <div key={index}>
                <img src={url} alt={alt} />
            </div>
        ))}
    </CarouselStyled>
);

export default Banner;
