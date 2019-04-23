import styled from 'styled-components';
import Rating from '../Rating';

export const ThumbnailRating = styled(Rating)`
    position: absolute;
    left: 20px;
    top: 19px;
`;

export const Thumbnail = styled.div`
    position relative;
    width: 278px;
    float: left;
`;

export const ThumbnailName = styled.div`
    color: #707070;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    margin-top: 4px;
    margin-bottom: 4px;
    min-height: 56px;
`;

export const SpecialPrice = styled.div`
    display: block;
    width: 100%;
    float: left;
    text-align: center;
    line-height: 38px;
    font-size: 25px;
    color: #c70041;
    font-weight: 700;
`;

export const Price = styled.div`
    display: block;
    width: 50%;
    float: left;
    text-align: center;
    line-height: 38px;
    text-decoration: line-through;
    font-size: 16px;
    color: #707070;
    font-weight: 400;

    + ${SpecialPrice} {
        width: 50%;
    }
`;

export const Discount = styled.div`
    border-radius: 5px;
    background-color: #c70041;
    padding: 2px 10px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    position: absolute;
    right: 0;
    top: 12px;
`;
