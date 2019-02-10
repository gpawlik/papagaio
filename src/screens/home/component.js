// @flow
import * as React from 'react';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';
import { Button } from '~/components/button';
import { NavigationMenu } from '~/components/navigation-menu';
import { messages } from '~/domains/home/intl';

import { HomeScreen } from './components/screen';
import { EventList } from './components/event-list';
import { EventMap } from './components/event-map';

import { ButtonBox } from './styles';

type Props = {};

type State = {
    isListView: boolean,
};

export class HomeComponent extends React.PureComponent<Props, State> {
    state = {
        isListView: true,
    };

    handleToggleView = () => this.setState((state: State) => ({ isListView: !state.isListView }));

    handleShowFilters = () => navigate.showModal(routes.filters);

    handleCreateEvent = () => navigate.showModal(routes.eventCreate);

    render() {
        const { isListView } = this.state;

        return (
            <HomeScreen title={messages.title} hideHeader>
                <NavigationMenu />
                {isListView ? <EventList /> : <EventMap />}

                <ButtonBox>
                    <Button message={messages.button} onPress={this.handleToggleView} />
                    <Button message={messages.goToFilters} onPress={this.handleShowFilters} />
                    <Button message={messages.goToEventCreate} onPress={this.handleCreateEvent} />
                </ButtonBox>
            </HomeScreen>
        );
    }
}
