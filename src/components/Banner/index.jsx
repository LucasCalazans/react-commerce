import React from 'react';
import { CarouselStyled } from './styles';

const Banner = ({ images }) => (
    <CarouselStyled showThumbs={false} showStatus={false}>
        {images.map((imagem, index) => (
            <picture key={index}>
                <source srcSet={imagem[1].url} alt={imagem[1].alt} media="(min-width: 767px)" />
                <img src={imagem[0].url} alt={imagem[0].alt} />
            </picture>
        ))}
    </CarouselStyled>
);

export default Banner;
