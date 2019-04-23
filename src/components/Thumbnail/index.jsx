import React, { Component } from 'react';
import * as styles from './styles';

const Thumbnail = props => {
    let price = props.product.price;
    let specialPrice = props.product.special_price;
    let rating = props.product.rating;
    let decrease = price - specialPrice;
    let discount = (decrease / price) * 100;

    if (!specialPrice) {
        specialPrice = price;
        price = null;
    }

    return (
        <styles.Thumbnail className="thumbnal-wrapper">
            <styles.ThumbnailRating value={rating} />
            <styles.Discount>{discount.toFixed(0)}%</styles.Discount>
            <img src={props.product.thumbnail} alt={props.product.title} width="278" />
            <styles.ThumbnailName>{props.product.title}</styles.ThumbnailName>
            {price && <styles.Price>R${price}</styles.Price>}
            <styles.SpecialPrice>R$ {specialPrice}</styles.SpecialPrice>
        </styles.Thumbnail>
    );
};

export default Thumbnail;
