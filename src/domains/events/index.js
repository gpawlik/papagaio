// @flow
import { handleActions } from 'redux-actions';
import { Map as ImmutableMap, List, fromJS } from 'immutable';

import { handleReduce } from '../../utils/handle-reduce';

import { fetchEvents, receiveEvents } from './actions';

type State = ImmutableMap<string, *>;

export const initialState: State = ImmutableMap({
    items: List(),
    isLoading: false,
});

const actionHandlers = new Map([
    [fetchEvents, handleReduce(state => state.set('isLoading', true))],
    [
        receiveEvents,
        handleReduce((state, { payload: { events } }) => state.set('items', fromJS(events)).set('isLoading', false)),
    ],
]);

export const eventsReducer = handleActions(actionHandlers, initialState);
