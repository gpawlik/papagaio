// @flow
import { Map, List } from 'immutable';
import { createSelector } from 'reselect';

import { getIdFromProps } from '~/utils/selectors';

const getEventsState = state => state.events || Map();

export const getEvents = createSelector(
    [getEventsState],
    state => state.get('items', List())
);

export const getIsLoadingEvents = createSelector(
    [getEventsState],
    state => state.get('isLoading', false)
);

export const getEventById = createSelector(
    [getEvents, getIdFromProps],
    (events, id) => {
        console.log({ id });
        return events.find(item => item.get('id') === id, null, Map());
    }
);

export const getEventTitle = createSelector(
    [getEventById],
    event => {
        console.log({ event: event.toJS() });
        return event.get('title', '');
    }
);

export const getEventDescription = createSelector(
    [getEventById],
    event => event.get('description', '')
);

export const getEventLocation = createSelector(
    [getEventById],
    event => event.get('location', '')
);

export const getEventTime = createSelector(
    [getEventById],
    event => event.get('timestamp', '')
);

export const getEventContent = createSelector(
    [getEventById],
    event => event.get('content', '')
);
