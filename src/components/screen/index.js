// @flow
import * as React from 'react';
import type { $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { Header } from '~/components/header';

import { Container, Content } from './styles';

type Props = {|
    children: React.Node,
    title: $npm$ReactIntl$MessageDescriptor,
    backIcon?: string,
    hideHeader?: boolean,
    backAction?: () => Promise<*>,
|};

export const Screen = ({ children, title, backIcon, backAction, hideHeader }: Props) => {
    return (
        <Container>
            {!hideHeader ? <Header title={title} backIcon={backIcon} backAction={backAction} /> : null}
            <Content>{children}</Content>
        </Container>
    );
};
