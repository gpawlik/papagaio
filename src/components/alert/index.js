// @flow
import * as React from 'react';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { Container, Text } from './styles';

type Props = {|
    message: $npm$ReactIntl$MessageDescriptor,
    type: string,
|};

export const Alert = ({ message, type }: Props) => {
    return (
        <Container type={type}>
            <Text>{message}</Text>
        </Container>
    );
};
