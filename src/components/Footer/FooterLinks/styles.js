import styled from 'styled-components';
import { media, colors, sizes } from '../../../helpers/styles';
import fonts from '../../../helpers/styles/fonts';

const FooterTitle = styled.dt`
    display: none;
    ${media.tablet`
        width: 152px;
        height: 20px;
        color: ${colors.primary};
        font-family: ${fonts.fontbase};
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1.6px;
        text-transform: uppercase;
        display: initial;
    `}
`;

const FooterContainer = styled.div`
    justify-content: space-between;
    padding-left: 5%;
    ${media.tablet`
        display: flex;
        padding-left: 5%;
    `}
`;

const CategoryLinks = styled.a`
    display: none;
    ${media.tablet`
        width: 169px;
        height: 68px;
        color: ${colors.alternative};
        font-family: ${fonts.fontbase};
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1.6px;
        line-height: 24px;
        display: initial;
    `}
`;

const SupportInfo = styled.span`
    display: none;
    ${media.tablet`
        width: 169px;
        height: 68px;
        color: ${colors.alternative};
        font-family: ${fonts.fontbase};
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1.6px;
        line-height: 24px;
        display: table-row-group;
    `}
`;

const FooterImage = styled.img`
    padding-right: 13%;
    width: 60px;
    height: 60px;
    margin-top: ${sizes.large};
    ${media.tablet`
        padding-right:${sizes.smallAux};
        margin-top:4%;
        width : 30px; 
        height: 30px;
    `}
`;

const FooterIcon = styled.img`
    padding-right: ${sizes.smallAux};
`;

const BorderDiv = styled.div`
    width: 95%;
    height: 1px;
    background-color: ${colors.primary};
    opacity: 0.93;
    ${media.tablet`
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
