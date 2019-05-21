import styled from 'styled-components';

export const StarWrapper = styled.div`
    display: inline-block;
`;

export const Star = styled.label`
    cursor: ${({ isFixed }) => (isFixed ? 'default' : 'pointer')};
`;
