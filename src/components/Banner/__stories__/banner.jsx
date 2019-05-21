import React from 'react';
import { storiesOf } from '@storybook/react';
import Img from '../../../assets/images/banner.png';
import Banner from '../index';

const stories = storiesOf('Banner', module);

stories.add('Banner', () => {
    const imagesBanner = [
        { url: Img, alt: 'Image 1' },
        { url: Img, alt: 'Image 2' },
        { url: Img, alt: 'Image 3' },
        { url: Img, alt: 'Image 4' },
    ];
    return <Banner images={imagesBanner} />;
});
