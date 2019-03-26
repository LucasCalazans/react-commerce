import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '../index';
import FooterLinks from '../FooterLinks';
import FooterMobile from '../FooterMobile';

const stories = storiesOf('Footer', module);

stories.add('Footer', () => {
    return (
        <Footer>
            <FooterLinks />
            <FooterMobile />
        </Footer>
    );
});
