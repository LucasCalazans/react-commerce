import styled from 'styled-components';
import { media, colors, fonts } from '../../helpers/styles/index';
export const FooterCopyright = styled.div`
    position: absolute;
    ${media.phone`
        display:flex
        padding: 0 0 0 10%;
    `}
    ${media.tablet`
        padding: 0 0 0 30%;
    `}
`;

export const FooterCopyrightPhrase = styled.div`
    width: 391px;
    height: 24px;
    color: ${colors.alternative};
    font-family: ${fonts.fontbase};
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1.4px;
    line-height: 24px;
`;
