// @flow
import * as React from 'react';
import { FormattedMessage, type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { StyledText } from './styles';

type Props = {|
    message: $npm$ReactIntl$MessageDescriptor | string,
|};

export const Text = ({ message }: Props) => {
    if (!message) {
        return null;
    }
    if (typeof message === 'string') {
        return <StyledText>{message}</StyledText>;
    }
    return <FormattedMessage {...message}>{(m: string) => <StyledText>{m}</StyledText>}</FormattedMessage>;
};
