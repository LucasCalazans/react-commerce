import styled from 'styled-components';

const Star = styled.label`
    cursor: ${({ isFixed }) => (isFixed ? 'default' : 'pointer')};
`;

export { Star };
