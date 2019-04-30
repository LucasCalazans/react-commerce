import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '../../Pagination';

const stories = storiesOf('Pagination', module);

stories.add('Pagination', () => {
    return (
        <Pagination
            currentPage="5"
            totalItems="120"
            pagesRange="3"
            onChange={() => console.log('onChange')}
        />
    );
});
