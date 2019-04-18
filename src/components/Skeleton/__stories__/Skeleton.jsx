import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import { SkeletonWrapper, SkeletonItem } from '../index';

const stories = storiesOf('Skeleton', module);

stories.add('Example 1', () => {
    return (
        <Fragment>
            <SkeletonWrapper>
                <SkeletonItem />
                <SkeletonItem />
                <SkeletonItem />
                <SkeletonItem />
            </SkeletonWrapper>
        </Fragment>
    );
});
stories.add('Example 2', () => {
    return (
        <Fragment>
            <SkeletonWrapper type="row">
                <SkeletonItem circle={true} width="35px" height="35px" />
                <SkeletonWrapper>
                    <SkeletonItem />
                    <SkeletonItem space="20px" />
                </SkeletonWrapper>
            </SkeletonWrapper>
            <SkeletonWrapper type="row">
                <SkeletonWrapper width="80%">
                    <SkeletonItem />
                    <SkeletonItem />
                </SkeletonWrapper>
                <SkeletonItem circle={true} width="35px" height="35px" />
            </SkeletonWrapper>
        </Fragment>
    );
});
stories.add('Example 3', () => {
    return (
        <Fragment>
            <SkeletonWrapper>
                <SkeletonItem height="140px" space="40px" />
                <SkeletonItem />
                <SkeletonItem width="60%" />
                <SkeletonWrapper type="row">
                    <SkeletonItem />
                    <SkeletonItem />
                </SkeletonWrapper>
            </SkeletonWrapper>
        </Fragment>
    );
});
