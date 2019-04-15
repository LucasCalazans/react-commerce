import styled from 'styled-components';
import { media, sizes } from '../../helpers/styles/';

export const GalleryWrapper = styled.div`
    ${media.phone`
        display: flex;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 340px;
        .thumbs {
            display: none;
        }
    `}
    ${media.tablet`
        .thumbs{
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            .thumb {
                border: none;
                cursor: pointer;
                opacity: 0.5;
                transition: opacity 0.3s ease-in-out;
            }
            .thumb:hover {
                border: none;
                cursor: pointer;
                opacity: 1;       
            }
            .thumb.selected {
                border: none;
            }
        }
    `}
`;

export const ImgBlock = styled.div`
    ${media.phone`
        height: 300px;
        display: flex;
        img {
            display: block;
            width: 100%;
            height: auto;
            pointer-events: none;
        }
    `}
    ${media.desktop`
        background-repeat: no-repeat; 
        &:hover img {
            opacity: 0;
        }

    `}
`;
