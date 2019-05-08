import styled from 'styled-components';
import { media, colors, fonts, sizes } from '../../helpers/styles/index';

export const FilterChoose = styled.span`
    font-family: ${fonts.fontbase}, sans-serif;
    display: flex;
    ${media.tablet`
        display: none;
    `}
`;

export const FilterWrapper = styled.div`
    font-family: ${fonts.fontbase}, sans-serif;
    background-color: ${colors.alternativeLight};
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 15px;
    box-sizing: border-box;
    ${media.tablet`
        max-width: 300px;
        padding: 0;
        display: block;
        position: static;
        background-color: ${colors.white};
    `}
`;

export const FilterHeader = styled.div`
    font-size: 30px;
    color: ${colors.primary};
    position: relative;
`;

export const FilterClose = styled.span`
    padding: 10px 10px 15px;
    display: block;
    position: absolute;
    top: -10px;
    right: 0;
    overflow: hidden;
    cursor: pointer;
    line-height: 0.5;
    ${media.tablet`
        display: none;
    `}
    &:before {
        content: 'x';
        display: inline-block;
        color: ${colors.secondary};
        font-size: ${sizes.xlarge};
    }
`;

export const FilterBlock = styled.div`
    background-color: ${colors.white};
    border: 1px solid ${colors.alternativeLight};
    padding: 15px;
    margin-bottom: 20px;
`;

export const FilterTitle = styled.div`
    font-size: ${sizes.large};
    color: ${colors.primary};
    position: relative;
    cursor: pointer;
    &:after {
        font-size: ${sizes.xxLarge};
        color: ${colors.secondary};
        display: inline-block;
        line-height: 0.5;
        content: "${({ closed }) => (closed ? '+' : '-')}";
        position: absolute;
        top: 2px;
        right: 0;
    }
`;

export const FilterList = styled.ul`
    margin: 0;
    padding: 15px 0 0;
    list-style: none;
    display: ${({ closed }) => (closed ? 'none' : 'block')};
`;

export const FilterItem = styled.li`
    font-size: ${sizes.medium};
    padding: 3px 0;
`;

export const FilterElement = styled.span`
    color: ${({ selected }) => (selected ? colors.secondary : colors.alternative)};
    font-weight: ${({ selected }) => (selected ? fonts.bold : fonts.normal)};
    display: block;
    cursor: pointer;
`;
export const FilterCount = styled.span`
    color: ${colors.secondary};
`;
export const FilterRemove = styled.span`
    background-color: ${colors.primary};
    color: ${colors.white};
    font-size: ${sizes.small};
    display: inline-block;
    padding: 2px 6px;
    text-transform: uppercase;
`;
