// @flow
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';
import { Text } from '~/components/text';
import { generalMessages } from '~/i18n/intl';

import type { Props } from './types';

export class EventListComponent extends React.PureComponent<Props> {
    componentDidMount = () => {
        const { events, fetchEvents } = this.props;

        !events.size && fetchEvents();
    };

    handleOpenEvent = () => navigate.push(routes.eventDetails);

    render() {
        const { events, isLoadingEvents } = this.props;

        return isLoadingEvents ? (
            <Text message={generalMessages.loading} />
        ) : (
            <View data={events}>
                {events.map(event => {
                    const id = event.get('id');

                    return (
                        <TouchableOpacity key={id} onPress={() => this.handleOpenEvent(id)}>
                            <Text message={event.get('name')} />
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
}
