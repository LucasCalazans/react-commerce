import styled from 'styled-components';
import { media } from '../../../helpers/styles/index';

const FooterContainer = styled.div`
    display: initial;
    justify-content: space-between;
    ${media.phoneLandscape`
        display: flex;
        padding: 0;
    `}
`;

const FooterTitle = styled.dt`
    width: 152px;
    height: 20px;
    color: #14214e;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    ${media.phone`
        display: none;
    `}
    ${media.phoneLandscape`
        display: initial;
    `}
`;

const CategoryLinks = styled.a`
    width: 169px;
    height: 68px;
    color: #707070;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.6px;
    line-height: 24px;
    ${media.phone`

        display: none;
    `}
    ${media.phoneLandscape`
        display: initial;
    `}
`;

const SupportInfo = styled.span`
    width: 169px;
    height: 68px;
    color: #707070;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.6px;
    line-height: 24px;
    display: table-row-group;
    ${media.phone`
        display: none;
    `}
    ${media.phoneLandscape`
        display: initial;
    `}
`;

const FooterImage = styled.img`
    padding-right: 13%;
    width: 60px;
    height: 60px;
    margin-top: 20px;
    ${media.phoneLandscape`
        padding-right: 10px;
        margin-top:4%;
        width : 30px; 
        height: 30px;
    `}
`;

const FooterIcon = styled.img`
    padding-right: 10px;
`;

const BorderDiv = styled.div`
    width: 290px;
    height: 1px;
    background-color: #14214e;
    opacity: 0.93;
    ${media.phoneLandscape`
        display:none;
    `}
`;
export {
    FooterContainer,
    FooterTitle,
    CategoryLinks,
    SupportInfo,
    FooterImage,
    FooterIcon,
    BorderDiv,
};
