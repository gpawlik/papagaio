// @flow
import * as React from 'react';
import { Text } from 'react-native';
import { FormattedMessage, type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { Container } from './styles';

type Props = {|
    message: $npm$ReactIntl$MessageDescriptor,
    isLast?: boolean,
    onPress: () => void | Promise<*>,
|};

export const Button = ({ message, isLast, onPress }: Props) => (
    <Container isLast={isLast} onPress={onPress}>
        <FormattedMessage {...message}>{(m: string) => <Text>{m}</Text>}</FormattedMessage>
    </Container>
);
