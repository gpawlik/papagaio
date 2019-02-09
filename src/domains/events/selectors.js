// @flow
import { Map, List } from 'immutable';
import { createSelector } from 'reselect';

const getEventsState = state => state.events || Map();

export const getEvents = createSelector(
    [getEventsState],
    state => state.get('items', List())
);

export const getIsLoadingEvents = createSelector(
    [getEventsState],
    state => state.get('isLoading', false)
);
