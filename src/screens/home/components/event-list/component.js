// @flow
import * as React from 'react';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';
import { TextRegular2 } from '~/components/text';
import { Card } from '~/components/card';
import { generalMessages } from '~/i18n/intl';

import type { Props } from './types';
import { Container } from './styles';

export class EventListComponent extends React.PureComponent<Props> {
    componentDidMount = () => {
        const { hasEvents, fetchEvents } = this.props;

        !hasEvents && fetchEvents();
    };

    handleOpenEvent = (id: string) => navigate.push(routes.eventDetails, { id });

    render() {
        const { events, isLoadingEvents } = this.props;

        return isLoadingEvents ? (
            <TextRegular2 message={generalMessages.loading} />
        ) : (
            <Container>
                {events.map(event => {
                    const id = event.get('id');

                    return id ? (
                        <Card
                            key={id}
                            title={event.get('title', '')}
                            organizer={event.get('organizer', '')}
                            onPress={() => this.handleOpenEvent(id)}
                        />
                    ) : null;
                })}
            </Container>
        );
    }
}
