import styled from 'styled-components';

const ImgBlock = styled.div`
    background-repeat: no-repeat;
    display: flex;
    height: 300px;
    img {
        display: block;
        width: 100%;
        height: auto;
        pointer-events: none;
    }
    &:hover img {
        opacity: 0;
    }
`;
export default ImgBlock;
