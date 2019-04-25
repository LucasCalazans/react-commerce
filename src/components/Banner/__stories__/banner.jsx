import React from 'react';
import { storiesOf } from '@storybook/react';
import Img from '../../../assets/images/banner.png';
import NavigationArrow from '../styles';
import Banner from '../index';

const stories = storiesOf('Banner', module);

stories.add('Banner', () => {
    const imagesBanner = [
        { url: Img, alt: 'Imagem 1' },
        { url: Img, alt: 'Imagem 2' },
        { url: Img, alt: 'Imagem 3' },
        { url: Img, alt: 'Imagem 4' },
    ];
    return <Banner images={imagesBanner} />;
});
