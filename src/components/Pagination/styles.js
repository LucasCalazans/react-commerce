import styled, { css } from 'styled-components';
import { colors, fonts } from '../../helpers/styles';

export const PageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const common = css`
    padding: 10px;
    height: 30px;
    padding-top: 0px;
    background: none;
    border: none;
    outline: none;
    cursor: ${({ active }) => (active ? 'default' : 'pointer')};
`;

export const PageButton = styled.button`
    ${common}
    font-family: '${fonts.fontbase}';
    font-size: 24px;
    color: ${({ active }) => (active ? colors.secondary : colors.primary)};
`;

const arrowButton = css`
    ${common}
    padding-top: 8px;
`;

export const LeftButton = styled.button`
    ${arrowButton}
`;

export const RightButton = styled.button`
    ${arrowButton}
`;
