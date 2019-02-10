// @flow
import * as React from 'react';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { NavigationMenu } from '~/components/navigation-menu';
import { Container, Content } from '~/components/screen/styles';
import type { Props } from './types';

export class HomeScreenComponent extends React.PureComponent<Props> {
    onPress = () => {
        this.props.toggleNavigation({ isVisible: true });
    };

    render() {
        const { children } = this.props;
        return (
            <Container>
                <NavigationMenu />
                <Header backIcon={generalIcons.MENU} backAction={this.onPress} />
                <Content>{children}</Content>
            </Container>
        );
    }
}
