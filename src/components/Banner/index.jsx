import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const CarouselStyled = styled(Carousel)`
    .control-prev.control-arrow:before {
        background: red;
    }
`;

class Banner extends Component {
    render() {
        return (
            <CarouselStyled showThumbs={false} showStatus={false}>
                {this.props.images.map(img => {
                    return (
                        <div>
                            <img src={img.url} alt={img.alt} />
                        </div>
                    );
                })}
            </CarouselStyled>
        );
    }
}

export default Banner;
