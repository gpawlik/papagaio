// @flow
import * as React from 'react';
import type { $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { Text } from '~/components/text';
import { BackButton } from './back-button';
import { Container } from './styles';

type Props = {|
    title: $npm$ReactIntl$MessageDescriptor,
    backIcon?: string,
    backAction?: () => Promise<*>,
|};

export class Header extends React.PureComponent<Props> {
    render() {
        const { title, backIcon, backAction } = this.props;

        return (
            <Container>
                <BackButton backIcon={backIcon} backAction={backAction} />
                {title ? <Text message={title} /> : null}
            </Container>
        );
    }
}
