// @flow
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import type { InnerProps } from '../types';

export const ArrowLeft = ({ colour, width, height }: InnerProps) => (
    <Svg viewBox="0 0 240.823 240.823" width={width} height={height}>
        <Path
            fill={colour}
            d="M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z"
        />
    </Svg>
);
