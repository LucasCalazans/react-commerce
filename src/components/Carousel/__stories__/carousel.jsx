import React from 'react';
import { storiesOf } from '@storybook/react';
// import Carousel from '../index';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const stories = storiesOf('Carousel', module);

stories.add('Default', () => {
    return (
        <Carousel>
            <div>
                <img src="http://react-responsive-carousel.js.org/assets/2.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="http://react-responsive-carousel.js.org/assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="http://react-responsive-carousel.js.org/assets/2.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
});
