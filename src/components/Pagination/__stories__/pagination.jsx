import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '../../Pagination';

const stories = storiesOf('Pagination', module);

stories.add('Pagination', () => {
    return (
        <Pagination
            currentPage="2"
            itemsPerPage="10"
            totalItems="120"
            pagesRange="3"
            onChange={() => console.log('opa')}
        />
    );
});
