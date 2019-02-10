// @flow
import { connect } from 'react-redux';

import {
    getEventTitle,
    getEventDescription,
    getEventLocation,
    getEventTime,
    getEventContent,
} from '~/domains/events/selectors';
import type { OwnProps, StateProps } from './types';

import { EventDetailsComponent } from './component';

export const mapStateToProps = (state: any, { id }: OwnProps): StateProps => ({
    title: getEventTitle(state, { id }),
    description: getEventDescription(state, { id }),
    location: getEventLocation(state, { id }),
    time: getEventTime(state, { id }),
    content: getEventContent(state, { id }),
});

export const EventDetails = connect(mapStateToProps)(EventDetailsComponent);
