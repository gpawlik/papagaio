// @flow
import * as React from 'react';
import type { $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { TextMedium3 } from '~/components/text';
import { BackButton } from './back-button';
import { Container } from './styles';

type Props = {|
    title?: $npm$ReactIntl$MessageDescriptor,
    backIcon?: string,
    backAction?: () => Promise<*> | void,
|};

export class Header extends React.PureComponent<Props> {
    render() {
        const { title, backIcon, backAction } = this.props;

        return (
            <Container>
                <BackButton backIcon={backIcon} backAction={backAction} />
                {title ? <TextMedium3 message={title} /> : null}
            </Container>
        );
    }
}
