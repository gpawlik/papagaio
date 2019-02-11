// @flow
import * as React from 'react';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { TextRegular2 } from '~/components/text';

import { Container } from './styles';

type Props = {|
    message: $npm$ReactIntl$MessageDescriptor,
    qaName?: string,
    onPress: () => void | Promise<*>,
|};

export const Button = ({ message, onPress, qaName }: Props) => {
    const testProps = qaName ? { testID: `button.${qaName}` } : {};

    return (
        <Container onPress={onPress} {...testProps}>
            <TextRegular2 message={message} />
        </Container>
    );
};
