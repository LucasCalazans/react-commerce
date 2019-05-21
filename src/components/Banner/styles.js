import styled from 'styled-components';
import { colors, media } from '../../helpers/styles';
import Icon from '../../components/Icon';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const CarouselStyled = styled(Carousel)`
    .carousel.carousel-slider .control-arrow {
        height: 140px;
        top: 50%;
        margin-top: -70px;
        opacity: 1;
        &:hover {
            background: none;

            &:before,
            &:after {
                background: ${colors.secondary};
            }
        }
        &.control-prev.control-arrow,
        &.control-next.control-arrow {
            &:before,
            &:after {
                content: '';
                background: ${colors.white};
                margin: 0 5px;
                display: block;
                border: none;
                width: 40px;
                height: 3px;
            }
            &:hover {
                &:before,
                &:after {
                    background: ${colors.secondary};
                }
            }

            &:before {
                transform: rotate(-42deg);
                margin-bottom: 22px;
                ${media.tablet`
                    width: 80px;
                    margin-bottom: 50px;
                `}
            }

            &:after {
                transform: rotate(42deg);
                ${media.tablet`
                    width: 80px;
                    margin-bottom: 0;
                `}
            }
        }
        &.control-next.control-arrow {
            &:before {
                transform: rotate(42deg);
            }
            &:after {
                transform: rotate(-42deg);
            }
        }
    }
`;
