import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip, { TooltipWrapper } from '../index';
import { Icon } from '../../Icons';
import { colors } from '../../../helpers/styles';

const stories = storiesOf('Tooltip', module);

stories.add('Tooltip', () => {
    const TooltipST = () => {
        const [tooltipActive, setTooltipActive] = useState(false);

        return (
            <TooltipWrapper
                onMouseOver={() => setTooltipActive(true)}
                onMouseOut={() => setTooltipActive(false)}
            >
                <Icon id="question" iconFill={colors.primary} iconWidth="42" iconHeight="42" />
                <Tooltip active={tooltipActive} position="right">
                    <span>This is an example of tooltip</span>
                </Tooltip>
            </TooltipWrapper>
        );
    };
    return <TooltipST />;
});
