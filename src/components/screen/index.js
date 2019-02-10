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
    isFullWidth?: boolean,
    backAction?: () => Promise<*>,
|};

export const Screen = ({ children, title, backIcon, backAction, hideHeader, isFullWidth }: Props) => {
    return (
        <Container>
            {!hideHeader ? <Header title={title} backIcon={backIcon} backAction={backAction} /> : null}
            <Content isFullWidth={isFullWidth}>{children}</Content>
        </Container>
    );
};
