// @flow
import * as React from 'react';
import { Text } from '~/components/text';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { Container } from './styles';

type Props = {|
    title: $npm$ReactIntl$MessageDescriptor | string,
    description: $npm$ReactIntl$MessageDescriptor | string,
    onPress: () => void | Promise<*>,
|};

export const Cell = ({ title, description, onPress }: Props) => (
    <Container onPress={onPress}>
        <Text message={title} />
        {description ? <Text message={description} /> : null}
    </Container>
);
