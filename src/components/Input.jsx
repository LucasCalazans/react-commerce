import styled from 'styled-components';

export default styled.input`
    width: ${props => (props.large ? '54%' : '327px')};
    border: 1px solid #d7d7d7;
    background-color: #ffffff;
    padding: 17px 0 15px 16px;
`;
