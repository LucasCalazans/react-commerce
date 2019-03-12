import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import * as jestDom from 'jest-dom';
import Form from '../src/components/Form';

expect.extend(jestDom);

describe('<Form />', () => {
    afterEach(cleanup);

    test('if onSubmit is fired', () => {
        const onSubmitMock = jest.fn(e => {
            e.preventDefault();
            return 'submit';
        });
        const { getByTestId } = render(<Form onSubmit={onSubmitMock} data-testid="submit-test" />);
        const formNode = getByTestId('submit-test');

        fireEvent.submit(formNode, onSubmitMock);
        expect(onSubmitMock).toHaveBeenCalled();
    });
});
