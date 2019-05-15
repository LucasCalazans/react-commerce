import React, { Fragment } from 'react';
import { configure, addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { styles } from '../src/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';

function loadStories() {
    const context = require.context('../src', true, /__stories__\/.+\.jsx?$/);
    context.keys().forEach(context);
}

const StoryGlobalStyle = createGlobalStyle`
  ${styles}

  html,
  body {
    padding: 10px;
  }
`;

addDecorator(storyFn => (
    <Router>
        <Fragment>
            <StoryGlobalStyle />
            {storyFn()}
        </Fragment>
    </Router>
));

configure(loadStories, module);
