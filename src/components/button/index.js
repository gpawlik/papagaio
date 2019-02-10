// @flow
import * as React from 'react';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { TextRegular2 } from '~/components/text';

import { Container } from './styles';

type Props = {|
    message: $npm$ReactIntl$MessageDescriptor,
    onPress: () => void | Promise<*>,
|};

export const Button = ({ message, onPress }: Props) => (
    <Container onPress={onPress}>
        <TextRegular2 message={message} />
    </Container>
);
