// @flow
import * as React from 'react';

import { Header } from '~/components/header';

import { Container, Content } from '~/components/screen/styles';
import type { Props } from './types';

export class HomeScreenComponent extends React.PureComponent<Props> {
    onPress = () => {
        this.props.toggleNavigation({ isVisible: true });
    };

    render() {
        const { children, backIcon } = this.props;
        return (
            <Container>
                <Header backIcon={backIcon} backAction={this.onPress} />
                <Content>{children}</Content>
            </Container>
        );
    }
}
