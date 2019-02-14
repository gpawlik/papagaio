// @flow
import { connect } from 'react-redux';

import { getEvents, getIsLoadingEvents } from '~/domains/events/selectors';
import type { StateProps } from './types';

import { EventListComponent } from './component';

export const mapStateToProps = (state: any): StateProps => ({
    events: getEvents(state),
    isLoadingEvents: getIsLoadingEvents(state),
});

export const EventList = connect(mapStateToProps)(EventListComponent);
