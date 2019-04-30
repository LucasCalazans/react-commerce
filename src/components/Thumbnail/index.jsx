import React, { Component } from 'react';
import { Thumb, ThumbnailRating, Discount, ThumbnailName, Price, SpecialPrice } from './styles';

const Thumbnail = props => {
    let { price, special_price, rating } = props.product;
    let decrease = price - special_price;
    let discount = (decrease / price) * 100;

    if (!special_price) {
        special_price = price;
        price = null;
    }

    return (
        <Thumb className="thumbnal-wrapper">
            <ThumbnailRating value={rating} />
            {price && <Discount>{discount.toFixed(0)}%</Discount>}
            <img src={props.product.thumbnail} alt={props.product.title} width="278" />
            <ThumbnailName>{props.product.title}</ThumbnailName>
            {price && <Price>R${price}</Price>}
            <SpecialPrice>R$ {special_price}</SpecialPrice>
        </Thumb>
    );
};

export default Thumbnail;
