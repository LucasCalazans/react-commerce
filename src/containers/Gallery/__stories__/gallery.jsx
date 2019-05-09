import React from 'react';
import { storiesOf } from '@storybook/react';
import Gallery from '../index';

const stories = storiesOf('Gallery', module);

stories.add('Gallery', () => {
    return (
        <Gallery
            images={[
                {
                    id: '1',
                    altText: 'test1',
                    url: 'http://lorempixel.com/output/cats-q-c-640-480-1.jpg',
                },
                {
                    id: '2',
                    altText: 'test2',
                    url: 'http://lorempixel.com/output/cats-q-c-640-480-2.jpg',
                },
                {
                    id: '3',
                    altText: 'test3',
                    url: 'http://lorempixel.com/output/cats-q-c-640-480-3.jpg',
                },
            ]}
        />
    );
});
