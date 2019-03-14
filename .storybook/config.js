import { configure } from '@storybook/react';

function loadStories() {
    const context = require.context('../src', true, /__stories__\/.+\.jsx?$/);
    context.keys().forEach(context);
}

configure(loadStories, module);
