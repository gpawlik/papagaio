// @flow
import * as React from 'react';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { TextRegular2, TextMedium2 } from '~/components/text';
import { Checkbox } from '~/components/checkbox';

import { Container, RowContainer } from './styles';

type CellProps = {
    title: $npm$ReactIntl$MessageDescriptor | string,
    description: $npm$ReactIntl$MessageDescriptor | string,
    onPress: () => void | Promise<*>,
};

type CheckboxCellProps = CellProps & {
    value: boolean,
};

export const Cell = ({ title, description, onPress }: Props) => (
    <Container onPress={onPress}>
        <TextMedium2 message={title} />
        {description ? <TextRegular2 message={description} /> : null}
    </Container>
);

export const CheckboxCell = ({ title, value, onPress }: CheckboxCellProps) => (
    <RowContainer>
        <Checkbox value={value} onValueChange={onPress} />
        <TextRegular2 message={title} />
    </RowContainer>
);
