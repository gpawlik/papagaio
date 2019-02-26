// @flow
import * as React from 'react';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { Container, Text } from './styles';

type Props = {
    message: $npm$ReactIntl$MessageDescriptor | string,
    onPress: () => void,
};

export const FloatingButton = ({ message, onPress }: Props) => {
    const color = 'red';
    return (
        <Container color={color} onPress={onPress}>
            <Text message={message} color={color} />
        </Container>
    );
};
