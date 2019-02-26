import React from 'react';
import App from '../src/App';
import { cleanup, render, fireEvent } from 'react-testing-library';
import * as jestDom from 'jest-dom';

expect.extend(jestDom);

describe('<Input />', () => {
    afterEach(cleanup);

    test('if input changes values', () => {
        const inputValue = 'test';
        const { getByPlaceholderText } = render(<App />);
        const inputNode = getByPlaceholderText('Type something');
        fireEvent.change(inputNode, { target: { value: inputValue } });
        expect(inputNode.value).toBe('test');
    });
});
