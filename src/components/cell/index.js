// @flow
import * as React from 'react';
import { TextRegular2 } from '~/components/text';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { Container } from './styles';

type Props = {|
    title: $npm$ReactIntl$MessageDescriptor | string,
    description: $npm$ReactIntl$MessageDescriptor | string,
    onPress: () => void | Promise<*>,
|};

export const Cell = ({ title, description, onPress }: Props) => (
    <Container onPress={onPress}>
        <TextRegular2 message={title} />
        {description ? <TextRegular2 message={description} /> : null}
    </Container>
);
