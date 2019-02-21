import React from 'react';
import App from '../src/App';
import { mount } from 'enzyme';

test('App contains Title', () => {
    const app = mount(<App />);
    expect(app.exists('Title')).toEqual(true);
});
