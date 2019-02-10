// @flow
import * as React from 'react';
import { FormattedMessage, type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { isIntlDescriptor } from '~/utils/intl';
import { StyledText } from './styles';

type Props = {|
    message: $npm$ReactIntl$MessageDescriptor | string,
|};

export const Text = ({ message }: Props) => {
    if (typeof message === 'string') {
        return <StyledText>{message}</StyledText>;
    }

    if (isIntlDescriptor(message)) {
        return <FormattedMessage {...message}>{(m: string) => <StyledText>{m}</StyledText>}</FormattedMessage>;
    }

    return null;
};
