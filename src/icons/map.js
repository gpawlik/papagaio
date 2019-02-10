// @flow
import * as React from 'react';
import { generalIcons } from '~/constants/icons/general';

import { ArrowLeft } from './arrow-left';
import { Close } from './close';
import { Menu } from './menu';

import type { OuterProps } from './types';

export const map = {
    [generalIcons.ARROW_LEFT]: ArrowLeft,
    [generalIcons.CLOSE]: Close,
    [generalIcons.MENU]: Menu,
};

export const getIconComponent = (type: string, props: OuterProps) => {
    return map[type] ? React.createElement(map[type], props) : null;
};
