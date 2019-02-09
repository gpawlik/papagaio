// @flow
import * as React from 'react';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';
import { Screen } from '~/components/screen';
import { Button } from '~/components/button';
import { Text } from '~/components/text';
import { messages } from '~/domains/home/intl';
import { generalMessages } from '~/i18n/intl';

import { ButtonBox } from './styles';
import type { Props } from './types';

export class HomeComponent extends React.PureComponent<Props> {
    handleOnPress = () => {
        const { id, doSomeAction } = this.props;
        doSomeAction({ offset: id + 1, name: 'foo' });
    };

    componentDidMount = () => {
        this.props.fetchEvents();
    };

    handleShowFilters = () => navigate.showModal(routes.filters);

    handleShowUserInfo = () => navigate.push(routes.userInfo);

    render() {
        const { id, events, isLoadingEvents } = this.props;

        return (
            <Screen title={messages.title} hideHeader>
                <Text message={{ ...messages.counter, values: { id } }} />

                {isLoadingEvents ? <Text message={generalMessages.loading} /> : null}

                {events.map(event => {
                    return <Text key={event.get('id')} message={event.get('name')} />;
                })}

                <ButtonBox>
                    <Button message={messages.button} onPress={this.handleOnPress} />
                    <Button message={messages.goToFilters} onPress={this.handleShowFilters} />
                    <Button message={messages.goToUserInfo} onPress={this.handleShowUserInfo} />
                </ButtonBox>
            </Screen>
        );
    }
}
