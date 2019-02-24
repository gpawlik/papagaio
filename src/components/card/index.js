// @flow
import * as React from 'react';
import * as R from 'ramda';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { TextRegular2, TextMedium4 } from '~/components/text';

import { Container } from './styles';

type Props = {
    title: $npm$ReactIntl$MessageDescriptor | string,
    organizer: $npm$ReactIntl$MessageDescriptor | string,
    address: $npm$ReactIntl$MessageDescriptor | string,
    onPress: () => void | Promise<*>,
};

export const Card = ({ title, organizer, address, onPress }: Props) => {
    const directions = R.compose(
        R.join(', '),
        R.filter(R.identity)
    )([organizer, address]);

    return (
        <Container onPress={onPress}>
            <TextMedium4 message={title} />
            {directions ? <TextRegular2 message={directions} /> : null}
        </Container>
    );
};
