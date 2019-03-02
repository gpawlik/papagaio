// @flow
import * as React from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';

import type { InnerProps } from '../types';

export const Logo = ({ width, height }: InnerProps) => (
    <Svg viewBox="0 0 512 512" width={width} height={height}>
        <Path
            d="M512 256c0 49.368-14.05 95.444-38.392 134.449-.675 1.08-1.36 2.15-2.046 3.219a254.498 254.498 0 0 1-30.998 39.077c-.114.125-.228.239-.343.363a254.701 254.701 0 0 1-37.748 32.036c-.779.54-1.558 1.08-2.347 1.61a254.952 254.952 0 0 1-14.746 9.284c-.717.415-1.433.831-2.16 1.236a251.431 251.431 0 0 1-31.247 15.047c-29.191 11.683-61.04 18.1-94.395 18.1-54.197 0-104.427-16.948-145.695-45.827a255.21 255.21 0 0 1-51.912-48.34C24.436 372.514 3.158 316.739 3.158 256c0-140.513 113.908-254.421 254.421-254.421S512 115.487 512 256z"
            fill="#60c5e8"
        />
        <Path d="M0 131.569c7.579 32.461 72.942 44.95 145.994 27.896s126.127-57.196 118.549-89.657" fill="#d33531" />
        <Path
            d="M351.974 52.588v439.733c-29.191 11.683-61.04 18.1-94.395 18.1-54.197 0-104.427-16.948-145.695-45.827a255.21 255.21 0 0 1-51.912-48.34V267.579c0-84.187 48.382-157.066 118.861-192.353 28.931-14.486 61.58-22.638 96.13-22.638h77.011z"
            fill="#ea5a52"
        />
        <Path
            d="M326.875 52.588c-34.549 0-67.198 8.152-96.13 22.638-70.48 35.287-118.861 108.165-118.861 192.353v197.015a255.21 255.21 0 0 1-51.912-48.34V267.579c0-84.187 48.382-157.066 118.861-192.353 28.931-14.486 61.58-22.638 96.13-22.638h51.912z"
            fill="#d33531"
        />
        <Path d="M3.304 52.591c0 33.334 60.813 60.357 135.829 60.357s135.829-27.023 135.829-60.357" fill="#ea5a52" />
        <Path
            d="M351.972 52.591v264.017h-16.554c-68.124 0-128.186-34.515-163.652-87.013-6.681-9.889-12.489-28.259-17.314-48.811-15.3-65.167 34.157-127.874 101.095-128.19.427-.002.853-.003 1.28-.003h95.145z"
            fill="#eaeaea"
        />
        <Path
            d="M506.943 207.567v58.725H351.964V52.588c42.795 0 81.539 17.353 109.588 45.391 28.038 28.048 45.391 66.793 45.391 109.588z"
            fill="#5c5560"
        />
        <Ellipse cx="297.963" cy="136.712" rx="31.496" ry="44.799" fill="#3c363f" />
        <Ellipse cx="308.514" cy="136.712" rx="15.743" ry="22.398" fill="#5c5560" />
        <Path d="M506.943 266.291H351.964v-74.395c0 29.077 61.643 74.395 154.979 74.395z" fill="#3c363f" />
    </Svg>
);
