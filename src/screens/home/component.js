// @flow
import * as React from 'react';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';
import { Screen } from '~/components/screen';
import { Button } from '~/components/button';
import { messages } from '~/domains/home/intl';

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

    handleShowUserInfo = () => navigate.push(routes.userInfo);

    handleCreateEvent = () => navigate.showModal(routes.eventCreate);

    render() {
        const { isListView } = this.state;

        return (
            <Screen title={messages.title} hideHeader>
                {isListView ? <EventList /> : <EventMap />}

                <ButtonBox>
                    <Button message={messages.button} onPress={this.handleToggleView} />
                    <Button message={messages.goToFilters} onPress={this.handleShowFilters} />
                    <Button message={messages.goToUserInfo} onPress={this.handleShowUserInfo} />
                    <Button message={messages.goToEventCreate} onPress={this.handleCreateEvent} />
                </ButtonBox>
            </Screen>
        );
    }
}
