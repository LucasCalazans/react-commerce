import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Alert from '../index';

const stories = storiesOf('Alert', module);

stories.add('Alert', () => {
    const AlertStory = () => {
        const [hasAlert, setHasAlert] = useState(true);
        return hasAlert ? (
            <Alert id="info" onClose={() => setHasAlert(false)}>
                <strong>Alert!</strong> React commerce.
            </Alert>
        ) : null;
    };
    return <AlertStory />;
});
