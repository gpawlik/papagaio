// @flow
import * as React from 'react';

import { messages } from '~/domains/home/intl';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';
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

    handleShowFilters = () => navigate.showModal(routes.filters);

    handleCreateEvent = () => navigate.showModal(routes.eventCreate);

    render() {
        const { isListView } = this.state;

        return (
            <Container>
                <NavigationMenu />
                <Header backIcon={generalIcons.MENU} backAction={this.onMenuPress} />
                <ButtonsBar>
                    <Button message={messages.button} onPress={this.handleToggleView} />
                    <Button message={messages.goToFilters} onPress={this.handleShowFilters} />
                    <Button message={messages.goToEventCreate} onPress={this.handleCreateEvent} isLast />
                </ButtonsBar>
                <Content isFullWidth>{isListView ? <EventList /> : <EventMap />}</Content>
            </Container>
        );
    }
}
