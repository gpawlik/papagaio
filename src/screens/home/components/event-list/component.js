// @flow
import * as React from 'react';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';
import { TextRegular2 } from '~/components/text';
import { Card } from '~/components/card';
import { generalMessages } from '~/i18n/intl';

import { FloatingButton } from '../floating-button';

import type { Props } from './types';
import { Container, ButtonBox } from './styles';

export class EventListComponent extends React.PureComponent<Props> {
    componentDidMount = () => {
        const { hasEvents, fetchEvents } = this.props;

        !hasEvents && fetchEvents();
    };

    handleOpenEvent = (id: string) => navigate.push(routes.eventDetails, { id });

    handleShowFilters = () => navigate.showModal(routes.filters);

    render() {
        const { events, isLoadingEvents } = this.props;

        return isLoadingEvents ? (
            <TextRegular2 message={generalMessages.loading} />
        ) : (
            <React.Fragment>
                <Container>
                    {events.map(event => {
                        const id = event.get('id');

                        return id ? (
                            <Card
                                key={id}
                                title={event.get('title', '')}
                                organizer={event.get('organizer', '')}
                                category={event.get('category', '')}
                                imageUrl={event.get('event_image', '')}
                                onPress={() => this.handleOpenEvent(id)}
                            />
                        ) : null;
                    })}
                </Container>
                <ButtonBox>
                    <FloatingButton message="Filters" onPress={this.handleShowFilters} />
                </ButtonBox>
            </React.Fragment>
        );
    }
}
