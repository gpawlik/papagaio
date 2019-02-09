// @flow
import * as React from 'react';
import { FormattedMessage, type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { StyledText } from './styles';

type Props = {|
    message: $npm$ReactIntl$MessageDescriptor,
|};

export const Text = ({ message }: Props) => {
    if (!message) {
        return null;
    }
    if (!message.id) {
        return <StyledText>{message}</StyledText>;
    }
    return <FormattedMessage {...message}>{(m: string) => <StyledText>{m}</StyledText>}</FormattedMessage>;
};
