import React from 'react';
import { storiesOf } from '@storybook/react';
import Thumbnail from '../index';

const stories = storiesOf('Thumbnail', module);

stories.add('Thumbnail', () => {
    const product = {
        id: 2,
        title: 'Handmade Soft Sausages',
        qty: 18,
        price: '352.00',
        special_price: '300.00',
        rating: 4,
        short_description: 'Repellendus temporibus veniam esse.',
        description:
            'Et ullam ratione quo autem nostrum tempore modi aut. Veniam ad et sequi optio molestiae. Non deserunt sed qui ut.',
        thumbnail: 'http://lorempixel.com/640/480',
        gallery: [
            'http://lorempixel.com/640/480',
            'http://lorempixel.com/640/480',
            'http://lorempixel.com/640/480',
            'http://lorempixel.com/640/480',
            'http://lorempixel.com/640/480',
            'http://lorempixel.com/640/480',
        ],
        categories: [5],
        related: [34, 102, 101, 441, 214, 260, 476],
    };

    return <Thumbnail product={product} />;
});
