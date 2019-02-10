// @flow
import * as React from 'react';

import { Container } from './styles';
import { Rect } from 'react-native-svg';

type Props = {|
    children: Rect.Node,
|};

export const ButtonsBar = ({ children }: Props) => <Container>{children}</Container>;
