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
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

export const PageButton = styled.button`
    ${common}
    font-family: '${fonts.fontbase}';
    font-size: 24px;
    color: ${({ disabled }) => (disabled ? colors.secondary : colors.primary)};
`;

export const ArrowButton = styled.button`
    ${common}
    padding-top: 8px;
`;
