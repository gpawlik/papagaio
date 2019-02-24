// @flow
import * as React from 'react';
import { generalIcons } from '~/constants/icons/general';

import { ArrowLeft } from './arrow-left';
import { Close } from './close';
import { Menu } from './menu';
import { MultiChoiceOn } from './multi-choice-on';
import { MultiChoiceOff } from './multi-choice-off';
import { Pin } from './pin';

import type { OuterProps } from './types';

export const map = {
    [generalIcons.ARROW_LEFT]: ArrowLeft,
    [generalIcons.CLOSE]: Close,
    [generalIcons.MENU]: Menu,
    [generalIcons.MULTI_CHOICE_ON]: MultiChoiceOn,
    [generalIcons.MULTI_CHOICE_OFF]: MultiChoiceOff,
    [generalIcons.PIN]: Pin,
};

export const getIconComponent = (type: string, props: OuterProps) => {
    return map[type] ? React.createElement(map[type], props) : null;
};
