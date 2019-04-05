import styled from 'styled-components';
import Icon from '../Icon';
import { colors, media } from '../../helpers/styles';
const Title = styled.div`
    width: 100%;
    height: 20px;
    color: #14214e;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.6px;
    display: flex;
    text-transform: uppercase;
`;

const Link = styled.a`
    width: 169px;
    height: 68px;
    color: #707070;
    font-family: Montserrat;
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
        stroke: #c70041;
        transform: translate(-249px, -96px);
        stroke-width: 1;
    }

    position: absolute;
    top: 0;
    right: 15%;

    ${media.phoneLandscape`
        right:35%;
     
     `}

    ${media.tablet`
        & path {
            stroke: ${colors.secondary};
            fill: #ffffff;
        }
    `}
`;

export { Title, Link, DropdownContent, IconArrow };
