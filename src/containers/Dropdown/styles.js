import styled from 'styled-components';
import Icon from '../../components/Icon/index';
import { colors, media, fonts } from '../../helpers/styles/index';
const Title = styled.div`
    width: 100%;
    height: 20px;
    color: ${colors.primary};
    font-family: ${fonts.fontbase};
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.6px;
    display: flex;
    text-transform: uppercase;
`;

const Link = styled.a`
    width: 169px;
    height: 68px;
    color: ${colors.alternative};
    font-family: ${fonts.fontbase};
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.6px;
    line-height: 24px;
`;

const DropdownContent = styled.div`
    position: relative;
`;

const IconArrow = styled(Icon)`
    & path {
        stroke: ${colors.secondary};
        transform: translate(-249px, -96px);
        stroke-width: 1;
        fill: ${colors.white};
    }

    position: absolute;
    top: 0;
    right: 5%;

    ${media.tablet`
        right:35%;
     
     `}

    ${media.tablet`
        & path {
            stroke: ${colors.secondary};
            fill: ${colors.white};
        }
    `}
`;

const ContentTitle = styled.span``;

export { Title, Link, DropdownContent, ContentTitle, IconArrow };
