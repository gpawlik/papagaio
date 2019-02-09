// @flow
import * as React from 'react';
import { FormattedMessage, type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { StyledText } from './styles';

type Props = {|
    message: $npm$ReactIntl$MessageDescriptor,
|};

export const Text = ({ message }: Props) => (
    <FormattedMessage {...message}>{(m: string) => <StyledText>{m}</StyledText>}</FormattedMessage>
);
