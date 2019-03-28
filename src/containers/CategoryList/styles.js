import styled from 'styled-components';
import { colors, sizes, media } from '../../helpers/styles';
import Icon from '../../components/Icon';

const ChooseMenu = styled.li`
    padding: 20px 10px 0px;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;

    ${media.tablet`
	    display: none;
    `}
`;

const ChooseMenuItem = styled.a`
    color: ${({ active }) => (active ? '#ffffff' : colors.alternativeLight)};
    font-size: ${sizes.xLarge}px;
    float: left;
    box-sizing: border-box;
    padding: 0 20px 10px;
    text-decoration: none;
    border-bottom: ${({ active }) => (active ? '1px solid #ffffff' : '0')};
    font-weight: ${({ active }) => (active ? '700' : '500')};
    cursor: pointer;
`;

const NavUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;

    ${media.tablet`
    	flex-wrap: unset;
    `}
`;

const NavList = styled.li`
    list-style: none;
    text-transform: uppercase;
    box-sizing: border-box;
	margin: 0;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid ${colors.alternativeLight};

    & :last-child {
    	border: none;
    }

    & svg {
        margin-left: 10px;
        min-width: 10px;
    }
    
    ${media.tablet`
        padding: 0 5px;
        border: none;
        border-right: 1px solid ${colors.alternative};
        width: auto;
    `}

    ${media.tabletLandscape`
        padding: 0 15px;
        margin: 0 10px;
    `}

    ${media.desktop`
        padding: 0 35px;
    `}

`;

const NavItem = styled.a`
    font-size: ${sizes.medium}px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    ${media.tablet`
    	color: ${colors.secondary};
        font-size: ${sizes.small}px;
    `}

    ${media.tabletLandscape`
        font-size: ${sizes.medium}px;
    `}
`;

const IconArrow = styled(Icon)`
    & path {
        stroke: #ffffff;
        transform: translate(-249px, -96px);
        stroke-width: 2;
    }

    ${media.tablet`
        & path {
            stroke: ${colors.secondary};
            fill: #ffffff;
        }
    `}
`;

export { NavItem, NavList, NavUl, ChooseMenuItem, ChooseMenu, IconArrow };
