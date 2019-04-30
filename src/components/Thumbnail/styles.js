import styled from 'styled-components';
import Rating from '../Rating';
import { colors, sizes, fonts } from '../../helpers/styles';

export const ThumbnailRating = styled(Rating)`
    position: absolute;
    left: 20px;
    top: 19px;
`;

export const Thumb = styled.div`
    position relative;
    width: 278px;
    float: left;
`;

export const ThumbnailName = styled.div`
    color: ${colors.alternative};
    font-size: ${sizes.large};
    font-weight: ${fonts.normal};
    line-height: 28px;
    text-align: center;
    margin-top: 4px;
    margin-bottom: 4px;
    min-height: 56px;
`;

export const SpecialPrice = styled.div`
    font-size: ${sizes.xLarge};
    color: ${colors.secondary};
    font-weight: ${fonts.bold};
    display: block;
    width: 100%;
    float: left;
    text-align: center;
    line-height: 38px;
`;

export const Price = styled.div`
    display: block;
    width: 50%;
    float: left;
    text-align: center;
    line-height: 38px;
    text-decoration: line-through;
    font-size: ${sizes.medium};
    color: ${colors.alternative};
    font-weight: ${fonts.normal};

    + ${SpecialPrice} {
        width: 50%;
    }
`;

export const Discount = styled.div`
    border-radius: 5px;
    background-color: ${colors.secondary};
    padding: 2px 10px;
    color: ${colors.white};
    font-size: ${sizes.large};
    font-weight: ${fonts.bold};
    line-height: 30px;
    position: absolute;
    right: 0;
    top: 12px;
`;
