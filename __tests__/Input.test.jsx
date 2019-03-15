import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import * as jestDom from 'jest-dom';
import { Input } from '../src/components';

expect.extend(jestDom);

describe('<Input />', () => {
    afterEach(cleanup);

    test('if input changes values', () => {
        const inputValue = 'test';
        const { getByTestId } = render(<Input data-testid="input-test" />);
        const inputNode = getByTestId('input-test');
        fireEvent.change(inputNode, { target: { value: inputValue } });
        expect(inputNode.value).toBe('test');
    });
});
