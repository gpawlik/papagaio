// @flow
import * as React from 'react';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { TextRegular2, TextMedium2 } from '~/components/text';

import { Container } from './styles';

type Props = {|
    title: $npm$ReactIntl$MessageDescriptor | string,
    description: $npm$ReactIntl$MessageDescriptor | string,
    onPress: () => void | Promise<*>,
|};

export const Cell = ({ title, description, onPress }: Props) => (
    <Container onPress={onPress}>
        <TextMedium2 message={title} />
        {description ? <TextRegular2 message={description} /> : null}
    </Container>
);
