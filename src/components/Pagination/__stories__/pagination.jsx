import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '../../Pagination';

const stories = storiesOf('Pagination', module);

stories.add('Pagination', () => (
    <Pagination
        currentPage="5"
        itemsPerPage="10"
        totalItems="120"
        pagesRange="3"
        onChange={() => changePagination()}
    />
));
