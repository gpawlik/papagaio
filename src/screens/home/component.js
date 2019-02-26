// @flow
import * as React from 'react';

import { messages } from '~/domains/home/intl';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { NavigationMenu } from '~/components/navigation-menu';
import { ButtonsBar } from '~/components/buttons-bar';
import { Button } from '~/components/buttons-bar/components/button';
import { Container, Content } from '~/components/screen/styles';

import { EventList } from './components/event-list';
import { EventMap } from './components/event-map';

import type { Props } from './types';

type State = {
    isListView: boolean,
};

export class HomeComponent extends React.PureComponent<Props, State> {
    state = {
        isListView: true,
    };

    onMenuPress = () => this.props.toggleNavigation({ isVisible: true });

    handleToggleView = () => this.setState((state: State) => ({ isListView: !state.isListView }));

    render() {
        const { isListView } = this.state;

        return (
            <Container testID="screen.home">
                <NavigationMenu />
                <Header backIcon={generalIcons.MENU} backAction={this.onMenuPress} hasLogo />
                <ButtonsBar>
                    <Button message={messages.button} onPress={this.handleToggleView} isLast />
                </ButtonsBar>
                <Content isFullWidth>{isListView ? <EventList /> : <EventMap />}</Content>
            </Container>
        );
    }
}
