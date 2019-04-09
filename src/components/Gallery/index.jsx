import styled from 'styled-components';

const ImgBlock = styled.div`
    background-repeat: no-repeat;
    img {
        display: block;
        width: 100%;
        pointer-events: none;
    }
    &:hover img {
        opacity: 0;
    }
`;
export default ImgBlock;
