import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip, { TooltipWrapper } from '../index';
import { Icon } from '../../Icons';

const stories = storiesOf('Tooltip', module);

stories.add('Tooltip', () => {
    const TooltipST = () => {
        const [tooltipActive, tooltipHover] = useState(false);

        return (
            <TooltipWrapper
                onMouseOver={() => tooltipHover(true)}
                onMouseOut={() => tooltipHover(false)}
            >
                <Icon id="question" iconFill="#31708f" iconWidth="42" iconHeight="42" />
                <Tooltip active={tooltipActive} position="right">
                    <span>This is an example of tooltip</span>
                </Tooltip>
            </TooltipWrapper>
        );
    };
    return <TooltipST />;
});
