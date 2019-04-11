import styled from 'styled-components';
import { media, colors, sizes } from '../../../helpers/styles';
import fonts from '../../../helpers/styles/fonts';

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
    color: ${colors.primary};
    font-family: ${fonts.fontbase};
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
    color: ${colors.alternative};
    font-family: ${fonts.fontbase};
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
    color: ${colors.alternative};
    font-family: ${fonts.fontbase};
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.6px;
    line-height: 24px;
    ${media.phone`
        display: none;
    `}
    ${media.phoneLandscape`
        display: table-row-group;
    `}
`;

const FooterImage = styled.img`
    padding-right: 13%;
    width: 60px;
    height: 60px;
    margin-top: ${sizes.large};
    ${media.phoneLandscape`
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
    width: 290px;
    height: 1px;
    background-color: ${colors.primary};
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
