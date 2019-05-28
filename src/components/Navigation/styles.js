import Icon from '../Icon';
import styled from 'styled-components';
import { colors, media, sizes } from '../../helpers/styles';

export const NavigationFull = styled.div`
    display: flex;
    order: 1;
    & .menu-mobile-box {
        max-width: 80%;
    }
    ${media.tablet`
        display: none;
    `}
`;

export const MenuBtn = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    margin-right: ${sizes.small}px;
    line-height: 0;
`;

export const IconMenu = styled(Icon)`
    & path {
        stroke: ${colors.primary};
        transform: translate(-15px, -40px);
        stroke-width: 3;
    }
`;
