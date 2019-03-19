import styled from 'styled-components';
import { media } from '../../../helpers/styles/index';

const FooterContainer = styled.div`
    display: initial;
    justify-content: space-between;
    padding: 10px 10px 10px 10px;
    ${media.phoneLandscape`
        display: flex;
    `}
`;

const FooterCategories = styled.h2`
    width: 152px;
    height: 20px;
    color: #14214e;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.6px;
    text-transform: uppercase;
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
`;

const FooterImages = styled.img`
    padding-right: 10px;
`;

export { FooterContainer, FooterCategories, CategoryLinks, SupportInfo, FooterImages };
